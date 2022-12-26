import { Router } from 'express';

import UsersController from '../../../interfaces/controllers/UsersController';

const router = Router();

router.route('/')
    .get(UsersController.list)
    .post(UsersController.create);

router.route('/:userId')
    .get(UsersController.get)
    .put(UsersController.update)
    .delete(UsersController.delete);

export default router;
