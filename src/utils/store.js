import { dateObjectBuider } from 'utils';

export const BRAZIL_STATES = {
  AC: {
    name: 'Acre',
    region: 'norte',
  },
  AL: {
    name: 'Alagoas',
    region: 'nordeste',
  },
  AP: {
    name: 'Amapá',
    region: 'norte',
  },
  AM: {
    name: 'Amazonas',
    region: 'norte',
  },
  BA: {
    name: 'Bahia',
    region: 'nordeste',
  },
  CE: {
    name: 'Ceará',
    region: 'nordeste',
  },
  DF: {
    name: 'Distrito Federal',
    region: 'centro oeste',
  },
  ES: {
    name: 'Espírito Santo',
    region: 'sudeste',
  },
  GO: {
    name: 'Goiás',
    region: 'centro oeste',
  },
  MA: {
    name: 'Maranhão',
    region: 'nordeste',
  },
  MT: {
    name: 'Mato Grosso',
    region: 'centro oeste',
  },
  MS: {
    name: 'Mato Grosso do Sul',
    region: 'centro oeste',
  },
  MG: {
    name: 'Minas Gerais',
    region: 'sudeste',
  },
  PA: {
    name: 'Pará',
    region: 'norte',
  },
  PB: {
    name: 'Paraíba',
    region: 'nordeste',
  },
  PR: {
    name: 'Paraná',
    region: 'sul',
  },
  PE: {
    name: 'Pernambuco',
    region: 'nordeste',
  },
  PI: {
    name: 'Piauí',
    region: 'nordeste',
  },
  RJ: {
    name: 'Rio de Janeiro',
    region: 'sudeste',
  },
  RN: {
    name: 'Rio Grande do Norte',
    region: 'nordeste',
  },
  RS: {
    name: 'Rio Grande do Sul',
    region: 'sul',
  },
  RO: {
    name: 'Rondônia',
    region: 'norte',
  },
  RR: {
    name: 'Roraima',
    region: 'norte',
  },
  SC: {
    name: 'Santa Catarina',
    region: 'sul',
  },
  SP: {
    name: 'São Paulo',
    region: 'sudeste',
  },
  SE: {
    name: 'Sergipe',
    region: 'nordeste',
  },
  TO: {
    name: 'Tocantins',
    region: 'norte',
  },
  Brazil: {
    name: 'Brasil',
  },
};

export const getLastTimestamp = (data) => data?.[data?.length - 1][1];

export const getLastRtValueById = (data = {}, id = '') =>
  data?.[id]?.[data[id].length - 1]?.rt.toFixed(2);

export const formatStoreData = (data) => {
  return data?.reduce((current, next) => {
    const [
      id,
      date,
      rt,
      low,
      high,
      newCases,
      smoothedCases,
      newDeaths,
      smoothedDeaths,
    ] = next;

    return {
      ...current,
      [id]: (current[id] || []).concat({
        date,
        high,
        id,
        low,
        newCases,
        newDeaths,
        smoothedCases,
        smoothedDeaths,
        region: BRAZIL_STATES[id].region || null,
        rt,
        state: BRAZIL_STATES[id].name,
      }),
    };
  }, {});
};

export const formatRtData = (data = []) =>
  data?.map((v) => ({ ...v, x: dateObjectBuider(v.date), y: v.rt }));

export const formatNewCasesData = (data = []) =>
  data?.map((v) => ({ ...v, x: dateObjectBuider(v.date), y: v.newCases }));

export const formatSmoothedCasesData = (data = []) =>
  data?.map((v) => ({ ...v, x: dateObjectBuider(v.date), y: v.smoothedCases }));

export const formatNewDeathsData = (data = []) =>
  data?.map((v) => ({ ...v, x: dateObjectBuider(v.date), y: v.newDeaths }));

export const formatSmoothedDeathsData = (data = []) =>
  data?.map((v) => ({
    ...v,
    x: dateObjectBuider(v.date),
    y: v.smoothedDeaths,
  }));

export const getAllLastRt = (data) =>
  Object.keys(data)?.map((k) => {
    const formatted = formatRtData(data[k]);
    return formatted[formatted.length - 1];
  });
