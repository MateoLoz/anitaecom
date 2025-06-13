import { productsService } from "../services/productsService";

export const initialProducts = await productsService.getAllProducts()