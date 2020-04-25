import { dateObjectBuider } from 'utils';

export const BRAZIL_STATES = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
  Brazil: 'Brasil',
};

export const getLastTimestamp = (data) => data?.[data?.length - 1][1];

export const getLastRtValue = (data = {}, id = '') =>
  data?.[id]?.[data[id].length - 1]?.y.toFixed(2);

export const formatListData = (data) => {
  return data?.reduce((current, next) => {
    const [id, x, y, low, high] = next;
    const date = dateObjectBuider(x);

    return {
      ...current,
      [id]: (current[id] || []).concat({
        id,
        state: id,
        date,
        x: date,
        y,
        low,
        high,
      }),
    };
  }, {});
};

export const formatBarChartData = (data) => {
  const formattedData = formatListData(data) || {};
  return Object.keys(formattedData)?.map(
    (k) => formattedData[k][formattedData[k].length - 1]
  );
};
