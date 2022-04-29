// la mision de este archivo es mantener las rutas
import {Router} from "express"
import productoCtrl from "../controllers/productos.controllers"
// onstancio al router
const router = Router ()

//crear la ruta
router.route("/products").get(productoCtrl.listarProductos).post(productoCtrl.crearProducto)

// el ":" significa q lo q le sigue es un parametro
router.route("/products/:id").get(productoCtrl.obtenerProducto)

export default router;