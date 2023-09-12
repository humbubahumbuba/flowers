import axios from 'axios';
import { Flower } from '../models/flower';

export const flowersApi = {
  // TODO: change to axios or ofetch
  async getFlowers() {
    const { data } = await axios.get<Flower[]>(
      'https://flowers-mock-data.firebaseio.com/flowers.json'
    );

    return data;
  },
};

// export const flowersApi = {
//   axios.get('https://flowers-mock-data.firebaseio.com/flowers.json')
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// }
