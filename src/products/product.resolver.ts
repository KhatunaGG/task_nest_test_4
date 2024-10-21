import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductService } from "./product.service";
import { ProductObjectType } from "./dto/product.objectType";
import { CreateProductInputType } from "./dto/createProductInputType";
import { IsValidProductId } from './dto/isValid-productId.args';
import { UpdateProductInputType } from './dto/updateProductInputType'


@Resolver()
export class ProductResolver{
    constructor(private productService: ProductService){}

    @Query(() => [ProductObjectType])
    getAllProducts() {
        return this.productService.getAllProducts()
    }

    @Query(() => ProductObjectType, {nullable: true })
    getProductById(@Args('id') {id}: IsValidProductId){
        return this.productService.getProductById(id)
    }

    @Mutation(() => ProductObjectType)
    createProduct(@Args('createProductInputType') createProductInputType: CreateProductInputType) {
        return this.productService.createProduct(createProductInputType)
    }

    @Mutation(() => ProductObjectType, {nullable: true})
    deleteProduct(@Args('id') {id}: IsValidProductId){
        return this.productService.deleteProduct(id)
    }

    @Mutation(() => ProductObjectType, {nullable: true})
    updateProduct(@Args('updateProductInputType') {id, ...args}: UpdateProductInputType) {
        return this.productService.updateProduct(id, args)
    }

}