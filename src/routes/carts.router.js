import { Router } from "express";
import uploader from "../services/uploader.js";

//MINI APLICACION//
const router = Router();

//BIENVENIDA//
router.get('/', (req,res)=>{
    res.send('Bienvenidos al infierno!')
});

export default router; 