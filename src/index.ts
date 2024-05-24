import {Product} from "../src/interfaces"
import {IcreateProduct, IupdateProduct, IErroieMessage} from "../src/interfaces"

interface IProduct {
    createProduct(data: IcreateProduct): Product;
    getProducts(): Product[];
    getOneProduct(id: number): Product | undefined;
    updateProduct(id: number, data: IupdateProduct): Product;
    deleteProduct(id: number): IErroieMessage | string;
}


class ProductList implements IProduct {
    private productList: Product[] = [];
    private id = 1;

    createProduct(data: IcreateProduct): Product {
        const now = new Date();

        const newProduct: Product  = {
            id: this.id,
            ...data,
            createdAt: now,
            updatedAt: now,
        }
        this.productList.push(newProduct)

        this.id++

        return newProduct
    }


    getProducts(): Product[] {
        return this.productList;
    }

    getOneProduct(id: number): Product | string {
        const valor = this.productList.find(element => element.id === id)
        if(!valor){
            return "falso";
        }
        return valor

    }
    updateProduct(id: number, data: Partial<IcreateProduct>): Product | string {
       

        const currentList = this.productList.find(element => element.id === id)
        if(!currentList){
            return "Todo "
        }
        const now = new Date()
        const updateProduct: Product = {...currentList, ...data, updatedAt: now}

        const index = this.productList.findIndex(element => element.id === id)
        this.productList.splice(index, 1, updateProduct);
        return updateProduct;
    }

    deleteProduct(id: number): IErroieMessage | string{
        const index = this.productList.findIndex(element => element.id === id)
        
        if(index === -1){
            return "todo not found."
        }
        this.productList.splice(index, 1)

        return {message: "Product successfully deleted."}
    }   
}

export const productList = new ProductList()