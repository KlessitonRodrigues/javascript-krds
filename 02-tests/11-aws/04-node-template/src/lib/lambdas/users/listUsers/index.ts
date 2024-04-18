import { Lambdas } from '../../../../@types/lambdas';
import { databaseConnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { toJSObject } from '../../../../utils/mongo/convertObj';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    const { pathParameters } = event;
    await databaseConnect();

    const userService = new UserService();

    if (pathParameters?.id) {
      const user = await userService.findOne(pathParameters.id);
      return createResponse(200, toJSObject(user));
    }

    const dbUsers = await userService.findAll();
    const users = dbUsers.map(user => toJSObject(user));
    return createResponse(200, users);
  } catch (err: any) {
    return createResponse(500, err.message);
  }
};
