import { ProductsContext } from "../context/ProductsContext";
import { useContext, useEffect, useState } from "react";
import { productsService } from "../services/productsService";

export function useProducts () {
    const { totalpages, currenntPage, setCurrentPage, setProducts, products, itemsinPage } = useContext(ProductsContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Función para cargar productos
    const loadProducts = async () => {
        try {
            setLoading(true);
            const data = await productsService.getAllProducts();
            setProducts(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error('Error al cargar productos:', err);
        } finally {
            setLoading(false);
        }
    };

    // Función para buscar productos
    const searchProducts = async (term) => {
        try {
            setLoading(true);
            const data = await productsService.searchProducts(term);
            setProducts(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            console.error('Error al buscar productos:', err);
        } finally {
            setLoading(false);
        }
    };

    // Función para cambiar página con carga de datos
    const cambiarPagina = (nuevaPagina) => {
        if (nuevaPagina >= 1 && nuevaPagina <= totalpages) {
            setCurrentPage(nuevaPagina);
            // Recargar productos cuando cambia la página
            loadProducts();
        }
    };

    // Cargar productos al montar el componente
    // useEffect(() => {
    //     loadProducts();
    // }, []);

    return {
        cambiarPagina,
        currenntPage,
        setProducts,
        products,
        itemsinPage,
        loading,
        error,
        searchProducts
    };
}