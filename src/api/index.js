import axios from 'axios';

export const getData = url =>
  axios
    .get(url)
    .then(res => res.data)
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));

export const setData = (url, data) =>
  axios
    .put(url, data)
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));
