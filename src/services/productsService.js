import axios from 'axios';

const API_URL = 'https://kamalionica-back.onrender.com/api'; // URL base de tu API

export const productsService = {
  // Obtener todos los productos
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  },

  // Obtener un producto por ID
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener producto:', error);
      throw error;
    }
  },

  // Buscar productos por categoría
  getProductsByCategory: async (category) => {
    try {
      const response = await axios.get(`${API_URL}/products?category=${category}`);
      return response.data;
    } catch (error) {
      console.error('Error al buscar productos por categoría:', error);
      throw error;
    }
  },

  // Buscar productos por término de búsqueda
  searchProducts: async (searchTerm) => {
    try {
      const response = await axios.get(`${API_URL}/products/search?term=${searchTerm}`);
      return response.data;
    } catch (error) {
      console.error('Error al buscar productos:', error);
      throw error;
    }
  }
};
