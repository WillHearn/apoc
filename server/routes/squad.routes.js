import { Router } from 'express';
import * as SquadController from '../controllers/squad.controller';
const router = new Router();

// Get all Squads
router.route('/squads').get(SquadController.getSquads);

export default router;
