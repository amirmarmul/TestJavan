import { Sequelize } from 'sequelize';
import config from '../../config/config';

const sequelize: Sequelize = new Sequelize(config.database.url);

sequelize.import('./models/User');
sequelize.import('./models/UserDevice');

sequelize.sync();

export default sequelize;
