import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { PostController } from './posts.controller';
import { PostService } from './posts.service';
import { PostEntity } from './entity/post.entity'

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
