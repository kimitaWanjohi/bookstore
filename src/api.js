import axios from 'axios';
import { APP_ID, API_URL } from './consts';


export const getBooks = async () => {
  const data = await axios.get(`${API_URL}/apps/${APP_ID}/books`);
  return data;
}

export const postBook = async (book) => {
  const data = await axios.post(`${API_URL}/apps/${APP_ID}/books`, data=book);
  return data;
}

export const deleteBook = async (id) => {
  const data = await axios.post(`{API_URL}/apps/${APP_ID}/books/${id}`);
  return data;
};
