import req from "express/lib/request";
import res from "express/lib/response";

const productoCtrl ={};

// agragamos la logica para obtener la lista de productos
productoCtrl.listarProductos = (req, res)=>{
    // toda la logica q quiero q suceda para q aparezca ka lista
    res.send("hola desde el backend")
}

productoCtrl.crearProducto =(req,res)=>{
    console.log(req.body)
    res.send("voy a crear un producto")
}
export default productoCtrl