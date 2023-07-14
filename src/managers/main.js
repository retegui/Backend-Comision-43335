import fs from 'fs';


const path = "./src/files/productos.json";

export default class ProductManager{

    addProduct = async (product) => {
        const products = await this.getProducts();

        if (products.length === 0){
            product.id = 1;
        } else{
            product.id = products [products.length-1].id+1
        }
        products.push(product); 
        await fs.promises.writeFile(path, JSON.stringify(products,null,'\t'))
        return products;
    }

    getProducts = async() =>{
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path,'utf-8');
            const products = JSON.parse(data);
            return products
        } else {
            return []
        }
    }

    async getProductById(id){
        try {
            const data = await this.getProducts();
            const productoEncontrado = data.find(elemento=>elemento.id === id);
            return productoEncontrado;
        } catch (error) {
            return "Not found";
        }
    }
    
    // async updateProduct(id){
    //     try{
    //         const data = await this.getProducts();
    //         const productoActualizado = data.find(elemento=>elemento.id === id);

    //     }catch{}
    // }

//     deleteById = async()=>{
//         if(fs.existsSync(path)){
//             const productos = await this.getProducts();
//             const productoEliminado = productos.filter(productos=>productos.id)
//             const newProducts=productos.filter(productoEliminado);
//             await fs.promises.writeFile(path,JSON.stringify(newProducts,null,2));
//             return `El producto con el id ${id} fue eliminado`;
//         } else{
//             return "El elemento no puede ser eliminado"
//         }
//     }
}


