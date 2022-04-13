import Producto from "../models/productos";

const productoCtrl ={};

// agragamos la logica para obtener la lista de productos
productoCtrl.listarProductos = (req, res)=>{
    // toda la logica q quiero q suceda para q aparezca ka lista
    res.send("hola desde el backend")
}

productoCtrl.crearProducto = async(req,res)=>{
    try{
        console.log(req.body)
        // validar
        // crear el producto en la base de datos. ponemos new Producto q es lo q importe arriba
        const productoNuevo = new Producto({
            productName: req.body.productName,
            price: req.body.price,
            urlImg: req.body.urlImg,
            category: req.body.category
        })
        // para guardar este objeto en la base de datos hacemos esto 
       await productoNuevo.save()
    //    enviar respuesta
    res.status(201).json({
        mensaje: "producto creado correctamente"
    })
    }catch(error){
        console.log(error)
        // enviar codigo de error
        res.status(404).json({
            mensaje: "Error al intentar agregar un producto"
        })
    }
}
export default productoCtrl