const express = require('express');
const path = require("path");
const app = express();
import Contenedor from './managers/ProductManager.js';

//PUERTO//
const PORT = process.env.PORT || 8080;

//PRODUCTOS//
const Contenedor = require("./ProductManager");
const productsService = new Contenedor("./products.json");

//SERVIDOR EXPRESS//
const server = app.listen(PORT, ()=>console.log(`Servidor escuchando el puerto ${PORT}`));

//MIDDLEWARES//
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//RUTAS//

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/productos", async(req,res)=>{
    const productos = await productsService.getAll();
    // console.log(productos)
    res.render("productos", {
        productos:productos
    })
})

app.post("/products",async(req,res)=>{

    const newProduct = req.body;

    await productsService.save(newProduct);

    res.redirect("/");
})