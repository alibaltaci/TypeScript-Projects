import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService{

    private dataSoure: SimpleDataSource;
    private products: Product[];

    constructor(){
        this.dataSoure = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSoure.getProducts().forEach( p => this.products.push(p) ) 
    }

    getById(id: number): Product {
        return this.products.filter( p => p.id === id)[0]
    }

    getProducts(): Product[] {
        return this.products;
    }

    saveProduct(product: Product): void {
        if(product.id === 0 || product.id === null){
            product.id = this.generateId();
            this.products.push(product)
        }else{
            const index = this.products.indexOf(product);
            this.products.splice(index, 1, product)
        }
    }

    deleteProduct(product: Product): void {
        const index = this.products.indexOf(product);
        if(index > 0){
            this.products.splice(index, 1);
        }
    }

    private generateId(): number {
        let key = 1;
        while( this.getById(key) !== null ){
            key++;
        }
        return key;
    }

}