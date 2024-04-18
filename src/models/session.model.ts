import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { User } from './../models/user.model';

@Entity()
@Unique(["user"])
export class Session {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text', { nullable: true, unique: true })
    tokenPush: string;

    @Column('bool', { default: false, comment: 'If true. The analyst can process' })
    isOnline: boolean;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', onUpdate: 'CURRENT_TIMESTAMP' })
    updateAt: Date;

    @ManyToOne(
        () => User,
        (user) => user.sessions,
        { onDelete: 'CASCADE', nullable: false }
    )
    user: User;

}