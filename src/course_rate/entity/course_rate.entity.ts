import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { PostEntity } from "src/posts/entity";

@Entity('course_rate')
export class CourseRateEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    got: number;

    @Column({
        nullable: false
    })
    sweet: number;

    @Column({
        nullable: false
    })
    cold: number;

    @Column({
        nullable: false
    })
    user_id: number;

    @OneToOne((type) => PostEntity, (PostEntity) => PostEntity.courseRate, {
        cascade: ["insert", "update", "recover"]
    })
    @JoinColumn({
        name: "post_id"
    })
    post: PostEntity;
    
    @Column({
        type: 'varchar',
        length: 255,        
    })
    course_name: string;

    @Column({
        type: 'varchar',
        length: 255      
    })
    teacher: string;

    @Column()
    like: number;

    @Column()
    dislike: number;

    @Column({
        nullable: false
    })
    give: number;

    @Column({
        nullable: false
    })
    recommand: number;

    @Column({
        nullable: false
    })
    hard: number;
}