import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./schema/product.scheme";
import { Model } from "mongoose";


@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product> ){}

    getAllProducts(){
        return this.productModel.find()
    }

    getProductById(id){
        return this.productModel.findById(id)

    }

    createProduct(createProductInputType) {
        return this.productModel.create(createProductInputType)
    }

    updateProduct(id, updateProductInputType){
        return this.productModel.findByIdAndUpdate(id, updateProductInputType, {new: true})
    }

    deleteProduct(id) {
        return this.productModel.findByIdAndDelete(id)
    }
   

}