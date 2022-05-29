import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/posts.module';
import { CourseRateModule } from './course_rate/course_rate.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PostModule,
    CourseRateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
