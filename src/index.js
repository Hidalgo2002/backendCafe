import express from "express"
import cors from "cors"
import morgan from "morgan"

// creo una instancia de express
const app = express()

// crear un puerto 
app.set("port", process.env.PORT || 4000)

app.listen(app.get("port"),()=>{
    console.log("se esta ejecutando el backend en el puerto"+app.get("port"))
})
console.log("preuba de backend")

// midellwords o configuraciones extras
app.use(morgan("dev"))//te da info extra en la terminal
app.use(cors())//hace q reciba peticiones o consultas desde otra pc

// interpreta obejtos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ruta de prueba

app.get("/products",(req, res)=>{
    res.send("hola desde el backend")
})

app.get("/",(req, res)=>{
    res.send("hola desde nashe");
})