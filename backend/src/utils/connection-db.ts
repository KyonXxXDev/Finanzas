import {Pool} from 'pg';
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} from './config.ts'

const config = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT ? Number(DB_PORT) : undefined
};

async function connectToDatabase () {
  try {
    const connection = new Pool(config);
    console.info('Connected to the database');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}
export const connection = await connectToDatabase();
