import config from './config';
import { SUPPORTED_DATABASE } from './constants';

import UserRepositoryMySql from '../repositories/UserRepositoryMySql';
import DeviceRepositoryApi from '../repositories/DeviceRepositoryApi';

const services: any = {
}

services.userRepository = new UserRepositoryMySql();
services.deviceRepository = new DeviceRepositoryApi();

export default services;
