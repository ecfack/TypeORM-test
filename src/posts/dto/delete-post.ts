import { IsInt, IsPositive, IsNotEmpty } from 'class-validator';

export class DeletePost {
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    readonly postId: number;
}