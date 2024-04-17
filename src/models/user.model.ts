import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
}