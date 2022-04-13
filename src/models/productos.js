// mpodelamos el dato a guardar en la base de datos
import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema ({
    productName:{
        type: String,
        maxlength: 200,
        unique: true,
        // UNIQUE ES PARA Q NO SE AGREGUEN EL MISMO PRODUCTO 2 VECES
        required: true
        // required significa q si o si tiene q mandar un ProductoName
    },
    price:{
        type: Number,
        required: true,
        maxlength: 2000,
    },
    urlImg:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
})
const Producto = mongoose.model("producto",productoSchema)

export default Producto;