const DB_TABLES = Object.freeze({
  NPP: 'nuclear_power_plants',
  REACTORS: 'npp_reactors',
  NF: 'nuclear_fuel',
  NFA: 'nuclear_fuel_area',
  CC: 'country_coords',
});

const REQ_TYPES = Object.freeze({
  REACTORS: 'reactors',
  LINK: 'link',
  NPP: 'npp',
  NUCLEAR_FUEL: 'nf',
  NUCLEAR_FUEL_AREA: 'nfa',
  CC: 'cc',
});

module.exports.REQ_TYPES = REQ_TYPES;
module.exports.DB_TABLES = DB_TABLES;