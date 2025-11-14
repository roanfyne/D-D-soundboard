/**
 * COLOR
 *
 * Object with color name to color hex code mapping for easy color reusage.
 * Hexcodes are taken from https://raw.githubusercontent.com/twbs/bootstrap/main/scss/_variables.scss
 *
 * @type {{pink: string, green: string, yellow: string, black: string, teal: string, cyan: string, red: string, orange: string, gray: string, blue: string, white: string, grayLight: string, grayDark: string, purple: string, indigo: string}}
 */
const COLOR = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
  black: '#000',
  white: '#fff',
  gray: '#6c757d',
  grayLight: '#e9ecef',
  grayDark: '#343a40',
};

/**
 * GROUP_NAMES
 *
 * Mapping of names for usage as object-attributes in GROUPS
 * and mapping in SOUNDS under the attribute `groupName`.
 *
 * @type {{NATURE: string, WEATHER: string, COMBAT: string, TOWN: string}}
 */
const GROUP_NAMES = {
  TOWN: 'town',
  COMBAT: 'combat',
  TRAVELLING: 'travelling',
  NATURE: 'nature',
  WEATHER: 'weather',
}

/**
 * GROUPS
 *
 * Parent of all sounds. Sounds are later equipped to Groups by
 * their `groupName`-Attribute. Groups are used to structure the
 * page and groups sounds by content criteria of the group.
 * The order of entries defines the order of appearance.
 *
 * @type {{[p: string]: {color: {border: string, header: {bg: string, text: string}, body: {bg: string, text: string}}, collapsed: boolean, iconHtml: string, title: string}|{color: {border: string, header: {bg: string, text: string}, body: {bg: string, text: string}}, collapsed: boolean, iconHtml: string, title: string}|{color: {border: string, header: {bg: string, text: string}, body: {bg: string, text: string}}, collapsed: boolean, iconHtml: string, title: string}|{color: {border: string, header: {bg: string, text: string}, body: {bg: string, text: string}}, collapsed: boolean, iconHtml: string, title: string}}}
 */
export const GROUPS = {
  [GROUP_NAMES.TOWN]: {
    title: 'Town',
    iconHtml: '🏰',
    collapsed: true,
    favorite: false,   
    color: {
      header: {
        bg: COLOR.purple,
        text: COLOR.yellow,
      },
      border: COLOR.purple,
      body: {
        bg: COLOR.white,
        text: COLOR.black,
      },
    }
  },
  [GROUP_NAMES.COMBAT]: {
    title: 'Combat',
    iconHtml: '⚔',
    collapsed: true,
    favorite: false,
    color: {
      header: {
        bg: COLOR.red,
        text: COLOR.white,
      },
      border: COLOR.red,
      body: {
        bg: COLOR.white,
        text: COLOR.black,
      },
    },
  },
  [GROUP_NAMES.TRAVELLING]: {
    title: 'Traveling',
    iconHtml: '🏕',
    collapsed: true,
    favorite: false,
    color: {
      header: {
        bg: COLOR.grayDark,
        text: COLOR.white,
      },
      border: COLOR.grayDark,
      body: {
        bg: COLOR.white,
        text: COLOR.black,
      },
    },
  },
  [GROUP_NAMES.NATURE]: {
    title: 'Nature',
    iconHtml: '🏞',
    collapsed: true,
    favorite: false,
    color: {
      header: {
        bg: COLOR.green,
        text: COLOR.white,
      },
      border: COLOR.green,
      body: {
        bg: COLOR.white,
        text: COLOR.black,
      },
    }
  },
  [GROUP_NAMES.INTRO]: {
    title: 'Music That Can Be Used For Intros and Stuff',
    iconHtml: '😜',
    collapsed: true,
    favorite: false,
    color: {
      header: {
        bg: COLOR.green,
        text: COLOR.white,
      },
      border: COLOR.green,
      body: {
        bg: COLOR.white,
        text: COLOR.black,
      },
    }
  },
  [GROUP_NAMES.WEATHER]: {
    title: 'Weather',
    iconHtml: '🌦',
    collapsed: true,
    favorite: false,
    color: {
      header: {
        bg: COLOR.blue,
        text: COLOR.white
      },
      border: COLOR.blue,
      body: {
        bg: COLOR.white,
        text: COLOR.black
      },
    }
  },
};

/**
 * SOUNDS
 *
 * Here comes the content of the application: the sounds.
 * The order of entries defines the order of appearance.
 *
 * Mandatory attributes
 * - title {string}
 * - groupName {string} - must match a name in GROUP_NAMES
 * - loopable {boolean} - will only work on sounds with one soundfile
 * - soundEntries {string[]} - paths to soundfiles
 *
 * Optional attributes
 * - iconHtml {string} - can contain an Emoticon or HTML with fontawesome icon
 *                        classes take from https://fontawesome.com/v4/icons/
 * - color {Object} - an object of hexcodes with following structure:
 *                    {
 *                      header: {
 *                        bg: COLOR.blue,
 *                        text: COLOR.white,
 *                      },
 *                      border: COLOR.blue,
 *                      body: {
 *                        bg: COLOR.white,
 *                        text: COLOR.black
 *                      },
 *                    }
 *
 * This is an empty sound for reference:
 * { title: '', groupName: GROUP_NAMES.TOWN, iconHtml: null, color: null, loopable: false, soundEntries: [], },
 *
 *
 * @type {[{groupName: string, color: {border: string, header: {bg: string, text: string}, body: {bg: string, text: string}}, iconHtml: string, loopable: boolean, title: string, soundEntries: string[]}]}
 */
export const SOUNDS = [
  // AMBIENT
  { title: 'Adventure-intro', groupName: GROUP_NAMES.TRAVELLING, iconHtml: '🎵', color: null, loopable: true, soundEntries: ['./sounds/music/adventure-intro.ogg',], },
  { title: 'Dripping Cave', groupName: GROUP_NAMES.NATURE, iconHtml: '⛰', color: null, loopable: true, soundEntries: ['./sounds/ambient/dripping-cave.ogg',], },
  { title: 'Evening Town', groupName: GROUP_NAMES.TOWN, iconHtml: '🌆', color: null, loopable: true, soundEntries: ['./sounds/ambient/evening-town.ogg',], },
  { title: 'Forest Day', groupName: GROUP_NAMES.NATURE, iconHtml: '🌳', color: null, loopable: true, soundEntries: ['./sounds/ambient/forest-daytime.ogg',], },
  { title: 'Horseback', groupName: GROUP_NAMES.TRAVELLING, iconHtml: '🐎', color: null, loopable: true, soundEntries: ['./sounds/ambient/horseback-travelling.ogg',], },
  { title: 'Camp at Night', groupName: GROUP_NAMES.TRAVELLING, iconHtml: '🏕', color: null, loopable: true, soundEntries: ['./sounds/ambient/night-camp.ogg',], },
  { title: 'Thunderstorm', groupName: GROUP_NAMES.NATURE, iconHtml: '🏞', color: null, loopable: true, soundEntries: ['./sounds/ambient/rapid-river.ogg',], },
  { title: 'Rapid River', groupName: GROUP_NAMES.WEATHER, iconHtml: '🌩', color: null, loopable: true, soundEntries: ['./sounds/ambient/thunderstorm.ogg',], },
  { title: 'Thunderstorm', groupName: GROUP_NAMES.WEATHER, iconHtml: '🌩', color: null, loopable: true, soundEntries: ['./sounds/ambient/rain-and-storm.ogg',], },
  { title: 'Rain and Storm', groupName: GROUP_NAMES.TOWN, iconHtml: '🏘', color: null, loopable: true, soundEntries: ['./sounds/ambient/town-square-daytime.ogg',], },
  { title: 'Marketplace', groupName: GROUP_NAMES.TOWN, iconHtml: '💰', color: null, loopable: true, soundEntries: ['./sounds/ambient/small-marketplace.ogg',], },
  { title: 'This is Amazing', groupName: GROUP_NAMES.INTRO, iconHtml: '💰', color: null, loopable: true, soundEntries: ['./sounds/music/INTRO.mp3',], },
  { title: 'Waltz Of The Tornado', groupName: GROUP_NAMES.INTRO, iconHtml: '🌪', color: null, loopable: true, soundEntries: ['./sounds/music/wiwiwi.mp3',], },
  { title: 'Return of the King', groupName: GROUP_NAMES.TRAVELLING, iconHtml: '👑', color: null, loopable: true, soundEntries: ['./sounds/ambient/Return of the king.mp3',], },
  { title: 'Home (The Shire)', groupName: GROUP_NAMES.TOWN, iconHtml: '🏡', color: null, loopable: true, soundEntries: ['./sounds/ambient/The-Shire.mp3',], },
  {
    title: 'Tavern',
    groupName: GROUP_NAMES.TOWN,
    iconHtml: '🍺',
    color: {
      header: {
        bg: COLOR.orange,
        text: COLOR.black,
      },
      border: COLOR.orange,
      body: {
        bg: COLOR.white,
        text: COLOR.black
      },
    },
    loopable: true,
    soundEntries: ['./sounds/ambient/tavern-music.ogg',],
  },
  {
    title: 'Tavern (Shady)',
    groupName: GROUP_NAMES.TOWN,
    iconHtml: '🍺',
    color: {
      header: {
        bg: COLOR.orange,
        text: COLOR.black,
      },
      border: COLOR.orange,
      body: {
        bg: COLOR.white,
        text: COLOR.black
      },
    },
    loopable: true,
    soundEntries: ['./sounds/ambient/tavern-shady.ogg',],
  },
  { title: 'Woodland Village', groupName: GROUP_NAMES.TOWN, iconHtml: '🏘', color: null, loopable: true, soundEntries: ['./sounds/ambient/woodland-village.ogg',], },
  { title: 'Village Grassland', groupName: GROUP_NAMES.TOWN, iconHtml: '🏘', color: null, loopable: true, soundEntries: ['./sounds/ambient/village-grassland.ogg',], },
  {
    title: 'Docks',
    groupName: GROUP_NAMES.TOWN,
    iconHtml: '⚓',
    color: {
      header: {
        bg: COLOR.blue,
        text: COLOR.white,
      },
      border: COLOR.blue,
      body: {
        bg: COLOR.white,
        text: COLOR.black
      },
    },
    loopable: true,
    soundEntries: [
      './sounds/ambient/docks.ogg',
    ],
  },
  // MUSIC
  { title: 'Darkest Dungeon the Cove Battle', groupName: GROUP_NAMES.COMBAT, iconHtml: '🎵', color: null, loopable: true, soundEntries: ['./sounds/music/darkest-dungeon-the-cove-battle.ogg',], },
  { title: 'Skyrim Blood and Steel', groupName: GROUP_NAMES.COMBAT, iconHtml: '🎵', color: null, loopable: true, soundEntries: ['./sounds/music/skyrim-ost-blood-and-steel.ogg',], },
  // EFFECTS
  { title: 'Dirt Slam', groupName: GROUP_NAMES.COMBAT, iconHtml: '👊', color: null, loopable: false, soundEntries: [
      './sounds/effects/dirt-slam-1.ogg',
      './sounds/effects/dirt-slam-2.ogg',
      './sounds/effects/dirt-slam-3.ogg',
      './sounds/effects/dirt-slam-4.ogg',
  ], },
  { title: 'Sword Clash', groupName: GROUP_NAMES.COMBAT, iconHtml: '⚔', color: null, loopable: false, soundEntries: [
      './sounds/effects/sword-clash-1.ogg',
      './sounds/effects/sword-clash-2.ogg',
      './sounds/effects/sword-clash-3.ogg',
  ], },
  { title: 'Arrow Hit', groupName: GROUP_NAMES.COMBAT, iconHtml: '🏹', color: null, loopable: false, soundEntries: [
    './sounds/effects/arrow-loose-and-hit-1.ogg',
    './sounds/effects/arrow-loose-and-hit-2.ogg',
    './sounds/effects/arrow-loose-and-hit-3.ogg',
    './sounds/effects/arrow-loose-and-hit-4.ogg',
    './sounds/effects/arrow-loose-and-hit-5.ogg',
    './sounds/effects/arrow-loose-and-hit-6.ogg',
    './sounds/effects/arrow-loose-and-hit-7.ogg',
  ], },
  { title: 'War Cry', groupName: GROUP_NAMES.COMBAT, iconHtml: '🗯', color: null, loopable: false, soundEntries: [
      './sounds/effects/male-attack-cry-1.ogg',
      './sounds/effects/male-attack-cry-2.ogg',
    ], },
  { title: 'Horn', groupName: GROUP_NAMES.COMBAT, iconHtml: '📯', color: null, loopable: false, soundEntries: [
      './sounds/effects/viking-horn.ogg',
  ], },
  { title: 'Dragon Bite', groupName: GROUP_NAMES.COMBAT, iconHtml: '🐲', color: null, loopable: false, soundEntries: [
      './sounds/effects/dragon-bite-1.ogg',
      './sounds/effects/dragon-bite-2.ogg',
  ], },
  { title: 'OwlBear Roar', groupName: GROUP_NAMES.COMBAT, iconHtml: '🐻', color: null, loopable: false, soundEntries: [
      './sounds/effects/owlbear-roar-1.ogg',
      './sounds/effects/owlbear-roar-2.ogg',
      './sounds/effects/owlbear-roar-3.ogg',
      './sounds/effects/owlbear-roar-4.ogg',
  ], },
  { title: 'Ooze', groupName: GROUP_NAMES.NATURE, iconHtml: null, color: null, loopable: false, soundEntries: [
      './sounds/effects/ooze-1.ogg',
      './sounds/effects/ooze-2.ogg',
      './sounds/effects/ooze-3.ogg',
      './sounds/effects/ooze-4.ogg',
      './sounds/effects/ooze-5.ogg',
  ], },
  { title: 'Swimming', groupName: GROUP_NAMES.TRAVELLING, iconHtml: '🏊', color: null, loopable: false, soundEntries: [
      './sounds/effects/swimming-1.ogg',
      './sounds/effects/swimming-2.ogg',
      './sounds/effects/swimming-3.ogg',
      './sounds/effects/swimming-4.ogg',
      './sounds/effects/swimming-5.ogg',
      './sounds/effects/swimming-6.ogg',
  ], },
  { title: 'Thunder Clap', groupName: GROUP_NAMES.WEATHER, iconHtml: '🌩', color: null, loopable: false, soundEntries: [
      './sounds/effects/thunder-clap-1.ogg',
      './sounds/effects/thunder-clap-2.ogg',
      './sounds/effects/thunder-clap-3.ogg',
      './sounds/effects/thunder-clap-4.ogg',
  ], },
  { title: 'Wave Crash', groupName: GROUP_NAMES.NATURE, iconHtml: '🌊', color: null, loopable: false, soundEntries: [
      './sounds/effects/wave-crash-1.ogg',
      './sounds/effects/wave-crash-2.ogg',
      './sounds/effects/wave-crash-3.ogg',
      './sounds/effects/wave-crash-4.ogg',
  ], },
];
