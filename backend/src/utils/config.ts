import dotenv from 'dotenv';

// Configuración de variables de entorno
dotenv.config();

export const { PORT } = process.env || 9000;

export const { SECRET_KEY = '' } = process.env;
export const { DB_HOST = ''} = process.env;
export const { DB_USER = '' } = process.env;
export const { DB_NAME = '' } = process.env;
export const { DB_PASSWORD = '' } = process.env;
export const { DB_PORT = 5432} = process.env;

export const { CLOUD_SECRET = '' } = process.env;
export const { CLOUD_API_KEY = '' } = process.env;
export const { CLOUD_NAME = '' } = process.env;