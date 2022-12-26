import config from './config';
import { SUPPORTED_DATABASE } from './constants';

import UserRepositoryMySql from '../repositories/UserRepositoryMySql';

const services: any = {
}

services.userRepository = new UserRepositoryMySql();

export default services;
