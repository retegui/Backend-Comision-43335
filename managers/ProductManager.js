import fs from 'fs';

const path = './files/products.json';

export default class ProductManager{
 
    addProduct = async (producto) => {
        const productos = await this.getProducts ();
        
        if (productos.length ===0){
            producto.id = 1;
        }
        else{
            producto.id = productos [productos.length-1].id+1
        }
       productos.push(producto);
       await fs.promises.writeFile(path, JSON.stringify(productos, null, '\t'))
     }
    getProducts = async ()=>{

        if(fs.existsSync(path)){

            const data = await fs.promises.readFile(path,'utf-8');
            const productos = JSON.parse(data);
            return productos;

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

