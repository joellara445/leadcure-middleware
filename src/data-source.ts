import { DataSource } from "typeorm/data-source/DataSource";
import { User } from "../src/models/user.model";
import { Lead } from "./models/leads.model";
import { Session } from "./models/session.model";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "144.217.95.164",
    port: 5432,
    username: "postgres",
    password: "@123456789Abcd@",
    database: "leadcure",
    synchronize: true,
    logging: true,
    entities: [User, Session, Lead],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))