import { Router } from 'express';

import users from './users';
import devices from './devices';

const router = Router();
router.use('/users', users);
router.use('/devices', devices);

export default router;
