import axios from 'axios';
import { store } from '../Store/Index';

export async function PostProcessFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post('http://localhost:3000/spreadsheet', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    store.commit('setResponseData', response.data);
    store.commit('setSuccess', true);
  } catch (error) {
    store.commit('setResponseData', error);
    store.commit('setSuccess', false);
  }
}