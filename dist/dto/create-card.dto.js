"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCardDto = void 0;
const card_entity_1 = require("../entities/card.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateCardDto extends card_entity_1.Card {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'card Title',
        example: 'Portátil - 90NX02M4-M00420 ASUS, 11,6 ", HD, Mediatek M8173C (4 núcleos, 1MB Caché, hasta 2.1 GHz, 64 bit), 4 GB, 32 GB, Intel UHD Graphics integrada, Android Azul',
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'card url',
        example: 'https://www.mediamarkt.es/es/product/_porttil-90nx02m4-m00420-asus-116--mediate-95724012.html',
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'image url',
        example: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_98443836/fee_786_587_png',
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "imageurl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'PC brand',
        example: 'ASUS',
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'PC specifics',
        example: [
            {
                "key": "Tamaño pantalla (cm/pulg):",
                "value": "33.78 cm / 13.3"
            },
            {
                "key": "Resolución",
                "value": "2560 x 1600 píxeles"
            }
        ],
    }),
    __metadata("design:type", Array)
], CreateCardDto.prototype, "specifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'delivery Time',
        example: '1',
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "deliveryTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'price',
        example: '200.52',
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'delivery Time',
        example: 'Disponible online',
    }),
    __metadata("design:type", String)
], CreateCardDto.prototype, "availability", void 0);
exports.CreateCardDto = CreateCardDto;
//# sourceMappingURL=create-card.dto.js.map