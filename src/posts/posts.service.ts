import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "./schema/post.schema";


@Injectable()
export class PostService{
    constructor( @InjectModel(Post.name) private postModel: Model<Post>){}

    getAllPosts() {
        return this.postModel.find()
    }

    getById(id) {
        return this.postModel.findById(id)
    }

    create(createPostInput) {
        return this.postModel.create(createPostInput)
    }

    update(id, updatePostInput){
        return this.postModel.findByIdAndUpdate(id, updatePostInput, {new: true})
    }


    delete(id) {
        return this.postModel.findByIdAndDelete(id)
    }
   

}