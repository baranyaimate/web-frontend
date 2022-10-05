import { User } from "./user";

export class Address {
    constructor(
        public id: number,
        public country: string,
        public city: string,
        public postcode: string,
        public state: string,
        public streetName: string,
        public streetNumber: string,
        public user: User,
    ) {}

}