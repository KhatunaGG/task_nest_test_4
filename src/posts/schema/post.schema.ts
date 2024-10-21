import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Post{
    @Prop()
    title: string;


    @Prop()
    content: string

}


export const PostsSchema = SchemaFactory.createForClass(Post)