import axios from 'axios';
import { Flower } from '../models/flower';

export const flowersApi = {
  async getFlowers() {
    const { data } = await axios.get<Flower[]>(
      'https://flowers-mock-data.firebaseio.com/flowers.json'
    );

    return data;
  },
};