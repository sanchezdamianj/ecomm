// import {stock} from '../data/data';

// export const requestData = () => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res(stock);
//       }, 2000);
//     });
//   };

// const basePath = 'https://api.mercadolibre.com';
export const requestData = (basePath) =>{
    fetch(`${basePath}/sites/MLA/search?q=:Ninja`)
}