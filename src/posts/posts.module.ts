import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostsSchema } from './schema/post.schema';
import { PostService } from './posts.service';
import { PostResolver } from './posts.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostsSchema }]),
  ],
  providers: [PostService, PostResolver],
})
export class PostModule {}
