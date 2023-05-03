import fs from 'fs';

const path = './files/products.json';

export default class ProductManager{
 
    addProduct = async (productos) => {
        const producto = await this.mostarproductos ();
        
        if (producto.length ===0){
            productos.id = 1;
        }
        else{
            productos.id = producto [producto.length-1].id+1
        }
       productos.push(producto);
       await fs.promises.writeFile(path, JSON.stringify(producto, null, '\t'))
     }
    getProducts = async ()=>{

        if(fs.existsSync(path)){

        }else{
        return [];
    }}
//     getProductById(){
//         try {
//             const producto = products.find(elemento=>elemento.id === id);
//             return producto;
//         } catch (error) {
//             return "Not found";
//         }
//     }
//     deleteById(){
//         try {
//             const newProducts = productos.filter(elemento=>elemento.id !== id);
//             return `El producto con el id ${id} fue elimnado`;
//         } catch (error) {
//             return "El elemento no puede ser eliminado"
//         }
//     }
}        

// const productosStock = new ProductManager();
// productosStock.addProduct("Remera","Lisa",8500,"",175395839,5)
// productosStock.addProduct("Pantalon","negro",15500,"",852837495,4)

// console.log(productosStock.getProducts());
// console.log(productosStock.getProductById(3));
// console.log(deleteById)