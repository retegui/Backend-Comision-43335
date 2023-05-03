import fs from 'fs';

const path = './files/products.json';

export default class ProductManager{
    constructor(){
        this.products=[];       
    }    
    getProducts=()=>{
        return this.products;
    }
    addProduct = (title,description,price,thumbnail,code,stock) => {
        const product ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        } 
        if (this.products.length ===0){
            product.id = 1;
        }
        else{
            product.id = this.products [this.products.length-1].id+1
        }
        this.products.push(product);
    }
    getProductById(){
        try {
            const producto = products.find(elemento=>elemento.id === id);
            return producto;
        } catch (error) {
            return "Not found";
        }
    }
    deleteById(){
        try {
            const newProducts = productos.filter(elemento=>elemento.id !== id);
            return `El producto con el id ${id} fue elimnado`;
        } catch (error) {
            return "El elemento no puede ser eliminado"
        }
    }
}        

const productosStock = new ProductManager();
productosStock.addProduct("Remera","Lisa",8500,"",175395839,5)
productosStock.addProduct("Pantalon","negro",15500,"",852837495,4)

console.log(productosStock.getProducts());
console.log(productosStock.getProductById(3));
console.log(deleteById)