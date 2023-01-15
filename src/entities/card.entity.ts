import { specifics } from "../spe.types";
import { GenreType } from "../form.types";

export class Card {
    name: string;
    url: string;
    imageurl: string;
    brand: string;
    specifications: specifics[];
    deliveryTime: string;
    price: string;
    availability: string;
}