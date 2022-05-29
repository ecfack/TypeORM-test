import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './entity';
import { UpdatePost } from './dto';

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
    ) { }

    // 撈出 Post 全部資料
    async getAllPost(): Promise<Object> {
        return await this.postRepository.find();
    }

    async getPostById(id: number): Promise<Object> {
        return await this.postRepository.findOne({
          where: {
            id: id
          },
          relations: [
              "courseRate",
          ]
        })
    }

    async deletePostById(id:number): Promise<Object> {
        return await this.postRepository.delete({
            id: id,
        })
    }

    async updatePostById(id:number, updatePost: UpdatePost): Promise<Object> {
        return await this.postRepository.update({
            id:id
        }, updatePost);
    }
}
