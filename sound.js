// Global volume controller for all <audio> elements
(function () {
  // DOM elements
  const slider = document.getElementById('global-volume-slider');
  const display = document.getElementById('global-volume-display');
  const btnIncrease = document.getElementById('global-increase');
  const btnDecrease = document.getElementById('global-decrease');
  const btnMute = document.getElementById('global-mute');

  // State
  let globalVolume = parseInt(slider.value, 10) / 100; // 0.0 - 1.0
  let previousVolume = globalVolume;
  let isMuted = false;

  function getAllAudioElements() {
    // Select all audio elements on the page
    return Array.from(document.querySelectorAll('audio'));
  }

  function applyVolumeToAll(vol) {
    const audios = getAllAudioElements();
    audios.forEach(a => {
      // Apply global multiplier directly
      a.volume = Math.max(0, Math.min(1, vol));
    });
  }

  function updateUI() {
    display.textContent = Math.round(globalVolume * 100) + '%';
    slider.value = Math.round(globalVolume * 100);
    btnMute.textContent = isMuted ? 'Unmute' : 'Mute';
  }

  // Buttons
  btnIncrease.addEventListener('click', () => {
    if (isMuted) {
      isMuted = false;
      globalVolume = previousVolume || 0.5;
    }
    globalVolume = Math.min(1, globalVolume + 0.05);
    previousVolume = globalVolume;
    applyVolumeToAll(globalVolume);
    updateUI();
  });

  btnDecrease.addEventListener('click', () => {
    if (isMuted) {
      isMuted = false;
      globalVolume = previousVolume || 0.5;
    }
    globalVolume = Math.max(0, globalVolume - 0.05);
    previousVolume = globalVolume;
    applyVolumeToAll(globalVolume);
    updateUI();
  });

  slider.addEventListener('input', (e) => {
    const val = Number(e.target.value) / 100;
    globalVolume = val;
    if (globalVolume === 0) isMuted = true;
    else { isMuted = false; previousVolume = globalVolume; }
    applyVolumeToAll(globalVolume);
    updateUI();
  });

  btnMute.addEventListener('click', () => {
    isMuted = !isMuted;
    if (isMuted) {
      previousVolume = globalVolume;
      globalVolume = 0;
    } else {
      globalVolume = previousVolume || 0.5;
    }
    applyVolumeToAll(globalVolume);
    updateUI();
  });

  // Initialize volumes on page load
  document.addEventListener('DOMContentLoaded', () => {
    // If you want existing audio elements to use a custom default,
    // set it here. Otherwise, we apply slider's value.
    applyVolumeToAll(globalVolume);
    updateUI();
  });

  // Observe future added audio elements (optional)
  const observer = new MutationObserver((mutations) => {
    // If new audio elements are added, ensure they match global volume.
    mutations.forEach(m => {
      m.addedNodes && m.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.tagName === 'AUDIO') {
          node.volume = globalVolume;
        } else if (node.nodeType === 1) {
          // also check descendants
          const audios = node.querySelectorAll && node.querySelectorAll('audio');
          audios && audios.forEach(a => a.volume = globalVolume);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
