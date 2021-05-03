import { Price } from "./price";

export interface Feed {
    storeName: string,
    name: string,
    description: string,
    price: Price,
    images: string,
    _id: string
}