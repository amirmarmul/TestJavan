import config from './config';
import { SUPPORTED_DATABASE } from './constants';

export default async function bootstrap() {
    
    if (config.database.dialect === SUPPORTED_DATABASE.MYSQL) {
        try {
            require('../persistance/sequelize/sequelize');
        } catch (error) {
            console.error('Unable to connect to the database:', error);    
        }
    }
}