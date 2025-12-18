import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productAPI = {
  // Get all products
  getAllProducts: async () => {
    const response = await api.get('/products'); // match your backend route
    return response.data;
  },

  // Create a new product
  createProduct: async (productData) => {
    const response = await api.post('/products', productData);
    return response.data;
  },

  // Update a product
  updateProduct: async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData); // use backticks!
    return response.data;
  },

  // Delete a product
  deleteProduct: async (id) => {
    const response = await api.delete(`/products/${id}`); // use backticks!
    return response.data;
  },
};

export default api;
