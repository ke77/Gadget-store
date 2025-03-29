import express from "express"
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";


const router = express.Router()

router.get('/', getProducts) // fetch all products
router.get('/:id', getProduct) // fetch a specific product
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;