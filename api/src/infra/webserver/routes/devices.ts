import { Router } from 'express';

import DevicesController from '../../../interfaces/controllers/DevicesController';

const router = Router();

router.route('/')
    .get(DevicesController.list);

router.route('/:deviceId')
    .get(DevicesController.get);

export default router;
