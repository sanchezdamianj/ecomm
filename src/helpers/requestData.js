import {stock} from '../data/data';

export const requestData = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(stock);
      }, 2000);
    });
  };