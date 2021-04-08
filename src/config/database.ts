import {ConnectionOptions} from "typeorm"
import {User, Adress, Role} from '../models'


const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || 'db',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "pop123abd",
    database: process.env.POSTGRES_DB || "creative",
    entities: [User, Adress, Role],
    synchronize: true
};

export default config;