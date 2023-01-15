import { Card } from "../entities/card.entity";
import { specifics } from "src/spe.types";
export declare class CreateCardDto extends Card {
    name: string;
    url: string;
    imageurl: string;
    brand: string;
    specifications: specifics[];
    deliveryTime: string;
    price: string;
    availability: string;
}
