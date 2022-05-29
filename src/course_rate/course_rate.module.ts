import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseRateEntity } from './entity/'

@Module({
    imports: [TypeOrmModule.forFeature([CourseRateEntity])],
    exports: [TypeOrmModule]
})
export class CourseRateModule {}
