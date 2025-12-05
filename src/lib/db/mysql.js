import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.PRIVATE_DB_HOST,
    user: process.env.PRIVATE_DB_USER,
    password: process.env.PRIVATE_DB_PASSWORD,
    database: process.env.PRIVATE_DB_NAME
});

export default pool;