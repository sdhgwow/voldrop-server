import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mainDB',
    password: 'zxcvbnmlkjhg1398',
    port: '5432',
});

export default pool