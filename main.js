class ProductManager{
    constructor(){
        this.products=[];       
    }    
    getProducts=()=>{
        return this.products;
    }
    addProduct = (title,description,price,thumbnail,stock) => {
        const product ={
            title,
            description,
            price,
            thumbnail,
            stock,
        } 
        if (this.products.length ===0){
            product.code = 1;
        }
        else{
            product.code = this.products [this.products.length-1].code+1
        }
        this.products.push(product);
    }
    getProductBycode(){
        try {
            const producto = products.find(elemento=>elemento.code === code);
            return producto;
        } catch (error) {
            return "Not found";
        }
    }
};

const productosStock = new ProductManager();
productosStock.addProduct("Remera","Lisa",8500,"",175395839,5)
productosStock.addProduct("Pantalon","negro",15500,"",852837495,4)

console.log(productosStock.getProducts());
console.log(productosStock.getProductBycode(3));
