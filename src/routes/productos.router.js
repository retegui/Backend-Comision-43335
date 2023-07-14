import ProductManager from "../managers/main.js";
import { Router } from "express";
import uploader from "../services/uploader.js";

//MINI APLICACION//
const router = Router();

const productManager = new ProductManager('../files/productos.json');

// PRODUCTOS//
router.get('/', async(req,res)=>{
    const {limit} = req.query;
    const products = await productManager.getProducts();
    if(limit<=0) return res.send ({products})
    const producto = products.slice(0,limit);
    res.send({products:producto})
    });

//PRODUCTO POR ID//
router.get("/:id", async(req,res)=>{
    const {id} = req.params;
    const products = await productManager.getProducts();
    const producto = products.find((producto)=> producto.id == id);
    if(producto) res.send(producto);
    else res.send('FATAL ERROR El producto no existe')
    });

// AGREGAR PRODUCTO//
router.post("/",uploader.single("thumbnail"), async (req,res)=>{

    const newProduct = req.body;

    await productManager.addProduct(newProduct);

    res.send({status:"success",message:"Producto cargado correctamente"})
})

// //ACTUALIZACION DATOS//
// router.put("/",async(req,res)=>{

//     const newProduct = req.body;

//     await productManager.push(newProduct);

//     res.send({status:"succes",message:"Producto cargado correctamente"})
// })

//BORRAR PRODUCTOS//
router.delete("/:id",async(req,res)=>{
    const {id} = req.params;
    const products = await productManager.getProducts();
    const productoEliminado = products.find((productos)=> productos.id == id);
    await productManager.deleteById(productoEliminado);
    
});


export default router; 