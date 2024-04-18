import { Lambdas } from '../../../../@types/lambdas';
import { databaseConnect } from '../../../../config/mongoDB';
import { createResponse } from '../../../../utils/api/createResponse';
import { toJSObject } from '../../../../utils/mongo/convertObj';
import { UserService } from '../../../services/user.service';

export const handler: Lambdas.APIHandler = async event => {
  try {
    const body = JSON.parse(event.body);
    await databaseConnect();

    const userService = new UserService();
    const user = await userService.create(body);

    return createResponse(200, toJSObject(user));
  } catch (err: any) {
    return createResponse(500, err.message);
  }
};
