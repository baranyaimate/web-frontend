import { User } from "./user";

export interface Address {
    id?: number,
    country?: string,
    city?: string,
    postcode?: string,
    state?: string,
    streetName?: string,
    streetNumber?: string,
    user?: User,
    userId?: number
}