import * as bodyparser from 'body-parser';
import * as express from 'express';

import '../config/dotenv';
import { handler as createUser } from '../lib/lambdas/users/createUsers';
import { handler as listUsers } from '../lib/lambdas/users/listUsers';
import { createLambdaEvent } from '../utils/api/localApi';

const localRoutes = () => {
  const router = express.Router();

  // .../users
  router.get('/users', createLambdaEvent(listUsers));
  router.post('/users', createLambdaEvent(createUser));

  // .../users/{id}
  router.get('/users/:id', createLambdaEvent(listUsers));
  router.patch('/users/:id', createLambdaEvent(createUser));
  router.delete('/users/:id', createLambdaEvent(createUser));
  return router;
};

const localApi = async () => {
  const app = express();
  const routes = localRoutes();
  const port = 3000;

  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());
  app.use(routes);
  app.listen(port, () => console.log('Running at: http://localhost:' + port));
};

localApi();
