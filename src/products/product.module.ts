import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./schema/product.scheme";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "./product.service";


@Module({
    imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
    providers: [ProductService, ProductResolver],
    exports: []
})
export class ProductModule {

}