import { Product } from "./product";

export interface ProductQuantityChange {
    product: Product;
    amountToChange: number;
}