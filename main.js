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
};

const productosStock = new ProductManager();
productosStock.addProduct("Remera","Lisa",8500,"",5)

console.log(productosStock.getProducts());
