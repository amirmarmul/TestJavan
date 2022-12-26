import config from './config';
import { SUPPORTED_DATABASE } from './constants';

export default async function bootstrap() {
    
    if (config.database.dialect === SUPPORTED_DATABASE.MYSQL) {
        const sequelize = require('../persistance/sequelize/sequelize')
        
        try {
            await sequelize.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);    
        }
    }
}