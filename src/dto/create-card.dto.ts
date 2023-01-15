import {
    Card
} from "../entities/card.entity";
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GenreType } from "../form.types";
import { specifics } from "src/spe.types";

  
export class CreateCardDto extends Card {
    @ApiProperty({
        description: 'card Title',
        example: 'Portátil - 90NX02M4-M00420 ASUS, 11,6 ", HD, Mediatek M8173C (4 núcleos, 1MB Caché, hasta 2.1 GHz, 64 bit), 4 GB, 32 GB, Intel UHD Graphics integrada, Android Azul',
    })
    name: string;
    @ApiProperty({
        description: 'card url',
        example: 'https://www.mediamarkt.es/es/product/_porttil-90nx02m4-m00420-asus-116--mediate-95724012.html',
    })
    url: string;
    // @ApiProperty({
    //     description: 'movie Release Date',
    //     example: '08-07-2010',
    // })
    // releaseDate: string;
    @ApiProperty({
        description: 'image url',
        example: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_98443836/fee_786_587_png',
    })
    imageurl: string;
    @ApiProperty({
        description: 'PC brand',
        example: 'ASUS',
    })
    brand: string;
    @ApiProperty({
        description: 'PC specifics',
        example: [
                {
                "key":"Tamaño pantalla (cm/pulg):",
                "value":"33.78 cm / 13.3"
                },
                {
                "key":"Resolución",
                "value":"2560 x 1600 píxeles"
                }
        ],
    })
    specifications: specifics[];
    @ApiProperty({
        description: 'delivery Time',
        example: '1',
    })
    deliveryTime: string
    @ApiProperty({
        description: 'price',
        example: '200.52',
    })
    price: string
    @ApiProperty({
        description: 'delivery Time',
        example: 'Disponible online',
    })
    availability: string
}