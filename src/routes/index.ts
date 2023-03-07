import { Router } from 'express';
import data from './data';
import matematica from './matematica';
import Login from '../controllers/Login';

const routes = Router();

routes.use('/date', data);
routes.use('/math', matematica);
routes.post('/login', Login.login);

export default routes;