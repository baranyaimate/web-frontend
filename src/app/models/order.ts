import { User } from "./user";
import { Product } from "./product";

export class Order {
    constructor(
        public id?: number,
        public user?: User,
        public userId?: number,
        public products?: Product[],
        public productIds?: number[],
    ) {}

}