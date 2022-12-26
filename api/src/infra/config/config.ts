import { SUPPORTED_DATABASE } from './constants';

export default {
    port: process.env.PORT || 4000,
    database: {
        dialect: process.env.DATABASE_DIALECT || SUPPORTED_DATABASE.MYSQL,
        url: process.env.DATABASE_URL || 'mysql://myuser:myuser@localhost:3306/mydb',
    }
}