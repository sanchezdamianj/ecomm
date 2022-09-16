import { basePath } from "../data/data";

const requestSearch = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(fetch(`${basePath}/sites/MLA/search?q=:${id}`));
    }, 1000);
  });
};
const requestDetail = (id) => {
  return new Promise((resolve, reject) => {
    // cuerpo de la promesa
    setTimeout(() => {
      resolve(fetch(`${basePath}/items/${id}`));
    }, 1000);
  });
};
const requestCategory = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(fetch(`${basePath}/categories/${id}`));
    }, 3000);
  });
};


export { requestDetail, requestCategory, requestSearch };
