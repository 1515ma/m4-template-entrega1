export interface Product {
    id: number,
    name: string,
    price: number,
    createdAt: Date,
    updatedAt: Date,
}

export interface IErroieMessage{
    message: string;
}


export type IcreateProduct = Pick<Product, "name" | "price">;
export type IupdateProduct = Partial<IcreateProduct>;