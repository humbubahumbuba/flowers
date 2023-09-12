export const flowersApi = {
  // TODO: change to axios or ofetch
  getFlowers() {
    return fetch('https://flowers-mock-data.firebaseio.com/flowers.json')
      .then((response) => response.json())
      .then((data) => data.flowers);
  },
};

// export const flowersApi = {
//   axios.get('https://flowers-mock-data.firebaseio.com/flowers.json')
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// }