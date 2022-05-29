import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { CourseRateEntity } from "src/course_rate/entity";

@Entity('post')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    course_name: string;

    @Column({
        type: 'varchar',
        length: 255,        
    })
    teacher: string;

    @Column({
        type: 'varchar',
        length: 255      
    })
    catalog: string;

    @Column({
        type: 'varchar',
        length: 255
    })
    semester: string;

    @Column({
        type: 'mediumtext'
    })
    score_style: string;

    @Column({
        type: 'mediumtext'
    })
    course_style: string;

    @Column({
        type: 'mediumtext'
    })
    course_need: string;

    @Column({
        type: 'mediumtext'
    })
    exam_style: string;

    @Column({
        type: 'mediumtext'
    })
    report_hw: string;

    @Column({
        type: 'mediumtext'
    })
    comment: string;

    @Column()
    report_count: number;

    @Column()
    user_id: number;

    @Column()
    crawl_id: number;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date;

    @Column()
    row_gsheet: number;

    @OneToOne((type) => CourseRateEntity, (courseRate) => courseRate.post, {
        nullable: false,
    })
    courseRate: CourseRateEntity;
}