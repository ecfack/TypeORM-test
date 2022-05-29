import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

// TODO: check update col
export class UpdatePost {

  @IsString()
  @IsOptional()
  readonly score_style: string;

  @IsString()
  @IsOptional()
  readonly course_style: string;

  @IsString()
  @IsOptional()
  readonly course_need: string;

  @IsString()
  @IsOptional()
  readonly exam_style: string;

  @IsString()
  @IsOptional()
  readonly report_hw: string;

  @IsString()
  @IsOptional()
  readonly comment: string;
}