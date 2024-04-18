import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Session } from "./session.model";

@Entity()
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    lastName: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { unique: true, nullable: true })
    phone: string;

    @Column('text', { select: false })
    password: string;

    @Column('text', { select: false, nullable: true })
    passwordTemporary: string;

    @Column('text', { array: true, default: ['client'] })
    roles: string[];

    @OneToMany(
        () => Session,
        (session) => session.user,
        { cascade: true, eager: false }
    )
    sessions?: Session[];
}