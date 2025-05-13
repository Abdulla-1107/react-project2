import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const getProducts = () => axios.get(API_URL);
export const createProduct = (data) => axios.post(API_URL, data);


export const getProductById = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};

export const updateProduct = (id, data) => {
  return axios.put(`https://dummyjson.com/products/${id}`, data);
};

export const deleteProduct = (id) => {
  return axios.delete(`https://dummyjson.com/products/${id}`);
};

