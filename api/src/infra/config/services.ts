import config from './config';
import { SUPPORTED_DATABASE } from './constants';

import UserRepositoryMySql from '../repositories/UserRepositoryMySql';
import DeviceRepositoryApi from '../repositories/DeviceRepositoryApi';
import UserDeviceRepositoryMySql from '../repositories/UserDeviceRepositoryMySql';

const services: any = {
}

services.userRepository = new UserRepositoryMySql();
services.userDeviceRepository = new UserDeviceRepositoryMySql();
services.deviceRepository = new DeviceRepositoryApi();

export default services;
