import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './posts.service';
import { PostObjectType } from './dto/post.objectType';
import { CreatePostInput } from './dto/create-post-input';
import { IsValidArgsId } from './dto/isValid-id.args';
import { UpdatePostInput } from './dto/update-post-input';

@Resolver()
export class PostResolver {
  constructor(private postsService: PostService) {}

  @Query(() => [PostObjectType])
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Query(() => PostObjectType, { nullable: true })
  getById(@Args('id') { id }: IsValidArgsId) {
    return this.postsService.getById(id);
  }




  @Mutation(() => PostObjectType)
  create(@Args('createPostArgs') createPostArgs: CreatePostInput) {
    return this.postsService.create(createPostArgs);
  }

  @Mutation(() => PostObjectType, {nullable: true})
  delete(@Args('id') { id }: IsValidArgsId) {
    return this.postsService.delete(id)
  }

  @Mutation(() => PostObjectType, {nullable: true})
  update(@Args('updatePostInput') {id, ...updatePostInput}: UpdatePostInput){
    return this.postsService.update(id, updatePostInput)
  }
}
