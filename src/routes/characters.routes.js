import { Router } from 'express';
import charController from '../controllers/characters.controller';

const charRouter = Router();

charRouter.get('/', charController.getCharacters);

export default charRouter;
