import express from 'express';
import productosRouter from './routes/productos.router.js'
import cartsRouter from './routes/carts.router.js'
import __dirname from './utils.js';
import uploader from './services/uploader.js';

const app = express();

//FLUJO DE TRABAJO//
app.use(express.json());  //Para leer peticiones en JSON o convertir si no lo son//
app.use(express.urlencoded({extended: true})); //Obtener los objetos codificados de URL//
app.use(express.static(`${__dirname}/public`)); //para mostrar archivos estaticos//
app.use('/api/productos', productosRouter); //si la peticion del usuario es productos redirige//
app.use('/api/carts', cartsRouter); //idem anterior//


//PUERTO//
app.listen(8080,()=>console.log(`Listening oon port 8080`));
