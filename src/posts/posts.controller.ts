import { Controller, Get, Post, Put, Delete, Param, Body, ValidationPipe, UsePipes, Patch } from '@nestjs/common';
import { PostService } from './posts.service';
import { UpdatePost } from './dto';

@Controller('post')
export class PostController {
    constructor(
        private readonly postService: PostService
    ) {}

    // @Get()
    // async allPosts(): Promise<Object> {
    //     return this.postService.getAllPost();
    // }

    @Get(":id")
    async getPostById( @Param('id') id: number): Promise<Object> {
        return this.postService.getPostById(id);
    }

    @Delete(":id")
    async deletePostById( @Param('id') id: number ): Promise<Object> {
        return this.postService.getPostById(id);
    }

    @Put(":id")
    @UsePipes(ValidationPipe)
    async updateUserById( @Param('id') id: number, @Body() updatePost: UpdatePost): Promise<Object> {
        return this.postService.updatePostById(id, updatePost);
    }
}
