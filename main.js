class ProductManager{
    constructor(title, description, price, thumbnail,code,stock){
        this.title=title;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.code=code;
        this.stock=stock;
    }

    addProduct(){
        try{
            const productos = this.getAll();
            if(productos.length>0){
            const lastId = productos[productos.length-1].id+1;
            product.id= lastId;
            productos.push(product);                   
        } else{ product.id=1;                   
            } 
         
        }catch(error){
            return "El producto no pudo ser guardado";
        }        

    }

    getProduct(){
        try{
            const contenido = this.fileName
            if(contenido.length>0){
                const productos = JSON.parse(contenido);
                return productos;
            } else {
                return [];
            }        
        } catch(error) {
            return "No hay productos";
        }

    }
    getProductById(code){
        try {
            const producto = productos.find(elemento=>elemento.id === id);
            return producto;
        } catch (error) {
            return "Not found";
        }

    }
}

