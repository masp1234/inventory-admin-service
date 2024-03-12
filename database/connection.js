import 'dotenv/config';
import { Sequelize } from 'sequelize';

const connection = new Sequelize({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

export default connection;

