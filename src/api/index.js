import axios from 'axios';

const baseUrl = 'https://russianwarship.rip/api/v2';

export const warInfo = async () => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/war-info`,
  };

  const res = await axios(configObj);
  return res.data;
};

export const getStatistics = async () => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/statistics/latest`,
  };

  const res = await axios(configObj);
  return res.data;
};

export const getTerms = async () => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/terms/ua`,
  };

  const res = await axios(configObj);
  return res.data;
};

export const statisticsDate = async day => {
  const configObj = {
    method: 'get',
    url: `${baseUrl}/statistics/${day}`,
  };

  const res = await axios(configObj);
  return res.data;
};
