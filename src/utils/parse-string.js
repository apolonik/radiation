import {NF_TEXT} from '../constants/constants';

const parser = (str) => {
  return str.replace(/ОЯТ/gi, NF_TEXT.oyat)
    .replace(/ОВАО/gi, NF_TEXT.ovao)
    .replace(/ОНАО/gi, NF_TEXT.onao)
    .replace(/РАО/gi, NF_TEXT.rao)
    .replace(/САО/gi, NF_TEXT.sao)
    .replace(/НАО/gi, NF_TEXT.nao)
    .replace(/КЖ/gi, NF_TEXT.kj)
    .replace(/ДЖ/gi, NF_TEXT.dj)
    .replace(/ВАО/gi, NF_TEXT.vao);
};

export {parser};