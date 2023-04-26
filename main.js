class ProductManager{
    constructor(){
        this.products=[];
        
        // this.title=title;
        // this.description=description;
        // this.price=price;
        // this.thumbnail=thumbnail;
        // this.code=code;
        // this.stock=stock;
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
            code,
            stock,
        } 

        if (this.product.length ===0){
            product.id = 1;
        }
        else{
            product.id = this.products [this.products.length-1].id+1
        }

    }

    getProductById(){
        try {
            const producto = products.find(elemento=>elemento.id === id);
            return producto;
        } catch (error) {
            return "Not found";
        }

    }
}

