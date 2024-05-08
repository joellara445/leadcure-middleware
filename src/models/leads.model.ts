import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
export class Lead {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text', { nullable: true, unique: false })
    iduser: string;

    @Column('text', { nullable: true, unique: false })
    idm: string

    @Column('text', { nullable: true, unique: false })
    promo: string

    @Column('text', { nullable: true, unique: false })
    firstname: string

    @Column('text', { nullable: true, unique: false })
    lastname: string

    @Column('text', { nullable: true, unique: false })
    email: string

    @Column('text', { nullable: true, unique: false })
    gender: string

    @Column('text', { nullable: true, unique: false })
    bd_day: string

    @Column('text', { nullable: true, unique: false })
    bd_month: string

    @Column('text', { nullable: true, unique: false })
    bd_year: string

    @Column('float', { default: 0, comment: 'Amount that the delivery person charged to your balance sheet' })
    age: number;

    @Column('text', { nullable: true, unique: false })
    ip: string

    @Column('text', { nullable: true, unique: false })
    zipcode: string

    @Column('text', { nullable: true, unique: false })
    phone: string

    @Column('text', { nullable: true, unique: false })
    country: string

    @Column('text', { nullable: true, unique: false })
    state: string

    @Column('text', { nullable: true, unique: false })
    city: string

    @Column('text', { nullable: true, unique: false })
    address: string

    @Column('text', { nullable: true, unique: false })
    type_via: string

    @Column('text', { nullable: true, unique: false })
    number: string

    @Column('text', { nullable: true, unique: false })
    floor: string

    @Column('text', { nullable: true, unique: false })
    door: string


    @Column('integer', { nullable: true, unique: false })
    espactividad: number;

    @Column('integer', { nullable: true, unique: false })
    phone_status: number;

    @Column('simple-array', { nullable: true, unique: false })
    campaigns: number[];

    @Column('simple-array', { nullable: true, unique: false })
    lists: number[];

    @Column('integer', { nullable: true, unique: false })
    recept: number;

    @Column('integer', { nullable: true, unique: false })
    active: number;

    @Column('integer', { nullable: true, unique: false })
    finaliza: number;

    @Column('integer', { nullable: true, unique: false })
    fraud: number;

    @Column('integer', { nullable: true, unique: false })
    ai: number;

    @Column('integer', { nullable: true, unique: false })
    robinson: number;

    @Column('simple-array', { nullable: true, unique: false })
    conversions: number[];

    @Column('integer', { nullable: true, unique: false })
    complete: number;

    @Column('text', { nullable: true, unique: false })
    lastidm: string;

    @Column('text', { nullable: true, unique: false })
    date_signup: string;

    @Column('text', { nullable: true, unique: false })
    date_last: string;

    @Column('text', { nullable: true, unique: false })
    score: string;

    @Column('text', { nullable: true, unique: false })
    coste: string;

    @Column('text', { nullable: true, unique: false })
    revenue: string;

    @Column('text', { nullable: true, unique: false })
    benefit: string;

    @Column('text', { nullable: true, unique: false })
    utp_score: string;

    @Column('text', { nullable: true, unique: false })
    cai_audifonos: string;

    @Column('text', { nullable: true, unique: false })
    cai_energia: string;

    @Column('text', { nullable: true, unique: false })
    cai_finanzas: string;

    @Column('text', { nullable: true, unique: false })
    cai_juegos: string;

    @Column('text', { nullable: true, unique: false })
    cai_ong: string;

    @Column('text', { nullable: true, unique: false })
    cai_seguros: string;

    @Column('text', { nullable: true, unique: false })
    cai_telcos: string;
}