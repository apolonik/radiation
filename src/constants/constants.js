import NppBlue from '../assets/npp-blue.png';
import NppGreen from '../assets/npp-green.png';
import NppGrey from '../assets/npp-grey.png';
import NppWhite from '../assets/npp-white.png';
import NppYellow from '../assets/npp-yellow.png';

const NPP_ICONS = Object.freeze({
  operational: NppBlue,
  under_construction: NppGreen,
  closed: NppGrey,
  not_work: NppWhite,
  not_started: NppYellow,
});

const AREA_STATE = Object.freeze({
  work: 'эксплуатируется',
  closed: 'закрыто',
  planned: 'в разработке',
});

const TYPES = {
  DISPATCH_DATA: 'DISPATCH_DATA',
  DISPATCH_REQUEST_TYPE: 'DISPATCH_REQUEST_TYPE',
};

const NF_TEXT = {
  onao: 'Очень низкоакивные отходы',
  kj: 'Короткоживущие',
  dj: 'Долгоживущие',
  nao: 'Низкоакивные отходы',
  sao: 'Среднеактивные отходы',
  vao: 'Высокоактивные отходы',
  ovao: 'Очень высокоактивные отходы',
  rao: 'Радиоактивные отходы',
  oyat: 'Отработавшее ядерное топливо',
};


const COLORS = [
  '#222222',
  '#00FF70',
  '#000000',
  '#cccccc',
  '#FF0078',
  '#FFF300',
  '#F700FF',
  '#00FF70',
  '#0036FF',
  '#FF0000',
];

export {NPP_ICONS, TYPES, NF_TEXT, COLORS, AREA_STATE};