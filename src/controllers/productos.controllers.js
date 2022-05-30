import Producto from "../models/productos";

const productoCtrl ={};

// agragamos la logica para obtener la lista de productos
productoCtrl.listarProductos = async(req, res)=>{
    // toda la logica q quiero q suceda para q aparezca ka lista
    try{
//    CREARUN ARREGLO DE PRODUCTOS Y ENVIARLO
    const listaProductos =await Producto.find();
    res.status(200).json(listaProductos)
    }catch(error){
        console.log(error)
        // enviar codigo de error
        res.status(404).json({
            mensaje: "Error al intentar listar los productos"
        })
    }
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
productoCtrl.obtenerProducto= async (req,res)=>{
    try{
    //  obtener el id del request
     console.log(req.params.id)
    // buscar el producto
     const productoBuscado = await Producto.findById(req.params.id)
    // enviar la respuesta 
    res.status(200).json(productoBuscado)
    }catch(error){
        console.log(error)
        // enviar codigo de error
        res.status(404).json({
            mensaje: "Error, no se pudo obtener el producto buscado"
        })
    }
}

productoCtrl.editarProducto = async(req, res)=>{
    try{
        console.log(req.params.id)
        console.log(req.body)
        // agregar validacion
        // console.log(req)
    }catch(error){
    console.log(error);
    res.status(404).json({
        mensaje:"Error al intetar editar un producto"
    })
    }
}
export default productoCtrl