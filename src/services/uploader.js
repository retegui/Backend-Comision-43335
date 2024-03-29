import multer from "multer";
import __dirname from "../utils.js";

//Donde se almacenan los archivos//
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,`${__dirname}/public/img`)
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const uploader = multer({storage});

export default uploader;
