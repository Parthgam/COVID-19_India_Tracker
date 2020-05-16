export const STATE_CODES = {
  AP: 'Andhra Pradesh',
  AR: 'Arunachal Pradesh',
  AS: 'Assam',
  BR: 'Bihar',
  CT: 'Chhattisgarh',
  GA: 'Goa',
  GJ: 'Gujarat',
  HR: 'Haryana',
  HP: 'Himachal Pradesh',
  JH: 'Jharkhand',
  KA: 'Karnataka',
  KL: 'Kerala',
  MP: 'Madhya Pradesh',
  MH: 'Maharashtra',
  MN: 'Manipur',
  ML: 'Meghalaya',
  MZ: 'Mizoram',
  NL: 'Nagaland',
  OR: 'Odisha',
  PB: 'Punjab',
  RJ: 'Rajasthan',
  SK: 'Sikkim',
  TN: 'Tamil Nadu',
  TG: 'Telangana',
  TR: 'Tripura',
  UT: 'Uttarakhand',
  UP: 'Uttar Pradesh',
  WB: 'West Bengal',
  AN: 'Andaman and Nicobar Islands',
  CH: 'Chandigarh',
  DN: 'Dadra and Nagar Haveli and Daman and Diu',
  DD: 'Daman and Diu',
  DL: 'Delhi',
  JK: 'Jammu and Kashmir',
  LA: 'Ladakh',
  LD: 'Lakshadweep',
  PY: 'Puducherry',
  TT: 'Total',
};

export const STATE_POPULATIONS = {
  'Andaman and Nicobar Islands': 397000,
  'Andhra Pradesh': 52221000,
  'Arunachal Pradesh': 1504000,
  Assam: 34293000,
  Bihar: 119520000,
  Chandigarh: 1179000,
  Chhattisgarh: 28724000,
  'Dadra and Nagar Haveli and Daman and Diu': 959000,
  Delhi: 19814000,
  Goa: 1540000,
  Gujarat: 67936000,
  Haryana: 28672000,
  'Himachal Pradesh': 7300000,
  'Jammu and Kashmir': 13203000,
  Jharkhand: 37403000,
  Karnataka: 65798000,
  Kerala: 35125000,
  Ladakh: 293000,
  Lakshadweep: 68000,
  'Madhya Pradesh': 82232000,
  Maharashtra: 122153000,
  Manipur: 3103000,
  Meghalaya: 3224000,
  Mizoram: 1192000,
  Nagaland: 2150000,
  Odisha: 43671000,
  Puducherry: 1504000,
  Punjab: 29859000,
  Rajasthan: 77264000,
  Sikkim: 664000,
  'Tamil Nadu': 75695000,
  Telangana: 37220000,
  Tripura: 3992000,
  'Uttar Pradesh': 224979000,
  Uttarakhand: 11141000,
  'West Bengal': 96906000,
  Total: 1332900000,
};

export const getStateCode = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

export const getPopulationCount = (object, value) => {
  console.log(Object.keys(object));
  return Object.keys(object).map((key) => {
    console.log(key, value);
    console.log(key === value);
    if (key === value) return object[key];
  });
};

export const NATIONAL_LEVEL_DATA = 'https://api.covid19india.org/data.json';
export const STATE_DISTRICT_WISE =
  'https://api.covid19india.org/state_district_wise.json';
export const STATE_DISTRICT_WISE_V2 =
  'https://api.covid19india.org/v2/state_district_wise.json';
export const STATE_DAILY_CHANGES =
  'https://api.covid19india.org/states_daily.json';
export const STATE_TEST_DATA =
  'https://api.covid19india.org/state_test_data.json';
export const DISTRICT_DAILY_CHANGES =
  'https://api.covid19india.org/districts_daily.json';
export const DISTRICT_LEVEL_ZONES = 'https://api.covid19india.org/zones.json';
