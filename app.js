import ProductManager from "./managers/ProductManager.js";

const manager = new ProductManager();

const env = async () =>{

    let product = {
        title:'pepe',
        description:'pepe',
        price:'pepe',
        thumbnail:'pepe',
        code:'pepe',
        stock:'pepe',
    }    

    let result = await manager.addProduct(product);
    console.log(result);


}

env()