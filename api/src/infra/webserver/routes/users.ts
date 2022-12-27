import { Router } from 'express';

import UsersController from '../../../interfaces/controllers/UsersController';
import UserDevicesController from '../../../interfaces/controllers/UserDevicesController';
import UserMembersController from '../../../interfaces/controllers/UserMembersController';

const router = Router();

router.route('/')
    .get(UsersController.list)
    .post(UsersController.create);

router.route('/:userId')
    .get(UsersController.get)
    .put(UsersController.update)
    .delete(UsersController.delete);

router.route('/:userId/devices')
    .get(UserDevicesController.get)
    .post(UserDevicesController.create);

router.route('/:userId/devices/:deviceId')
    .delete(UserDevicesController.delete);

router.route('/:userId/members')
    .get(UserMembersController.get)
    .post(UserMembersController.create);

router.route('/:userId/members/:memberId')
    .delete(UserMembersController.delete);

export default router;
