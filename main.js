class ProductManager{
    constructor(){
        this.products=[];       
    }    
    getProducts=()=>{
        return this.products;
    }
    addProduct(title,description,price,thumbnail,code,stock){
        const product={
            title,
            description,
            price,
            thumbnail,
            stock,
            code,
        } 
        if (this.products.length ===0){
            product.code = 1;
        }
        else{
            product.code = this.products [this.products.length-1].id+1
        }
    }
    getProductById(){
        try {
            const producto = products.find(elemento=>elemento.code === id);
            return producto;
        } catch (error) {
            return "Not found";
        }
    }
};

const productosStock = new ProductManager();
productosStock.addProduct("Remera", "Lisa", 8500,)

console.log(productosStock.getProducts());
