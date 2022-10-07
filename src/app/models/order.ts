import { User } from "./user";
import { Product } from "./product";

export interface Order {
    id?: number,
    user?: User,
    userId?: number,
    products?: Product[],
    productIds?: number[],
}