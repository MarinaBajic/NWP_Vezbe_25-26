import { ProductModel } from "./product-model";

export interface ProductQuantityChange {
    product: ProductModel;
    amountToChange: number;
}