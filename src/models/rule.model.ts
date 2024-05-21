import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
export class LeadRule {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('float', { default: 0, nullable: false, unique: false })
    type: string;

    @Column('text', { default: "=", nullable: false, unique: false })
    condicion: string

    @Column('text', { nullable: false, unique: false })
    valor: string

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}