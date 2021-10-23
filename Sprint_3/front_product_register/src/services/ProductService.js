import axios from "axios";
import { authHeaders } from "./AuthService";

const productsUrl = "http://localhost:3002/productos";

export const getProduct = async (id) => {
    return await axios.get(`${productsUrl}/${id}`, { headers: authHeaders });
}

export const getProducts = async () => {
    return await axios.get(`${productsUrl}/`);
}

export const addProduct = async (product) => {
    return await axios.post(`${productsUrl}/`, product, { headers: authHeaders });
}

export const deleteProduct = async (id) => {
    return await axios.delete(`${productsUrl}/${id}`, { headers: authHeaders });
}

export const editProduct = async (product) => {
    return await axios.put(`${productsUrl}/${product._id}`, product, { headers: authHeaders });
}