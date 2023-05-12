import axios from 'axios';
import { APP_ID, API_URL } from './consts';

export const getBooks = async () => {
  const res = await axios.get(`${API_URL}/apps/${APP_ID}/books`);
  return res;
};

export const postBook = async (book) => {
  const res = await axios.post(`${API_URL}/apps/${APP_ID}/books`, book);
  return res;
};

export const deleteBook = async (id) => {
  const res = await axios.delete(`${API_URL}/apps/${APP_ID}/books/${id}`);
  return res;
};
