import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const classesController = new ClassesController()
const connectionsController = new ConnectionsController();

const routes = express.Router();

routes.post('/create_class', classesController.create);
routes.get('/list_classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;