import { Lambdas } from '../../../../@types/lambdas';
import { createResponse } from '../../../../utils/api/createResponse';

export const handler: Lambdas.APIHandler = async event => {
  try {
    const { body } = event;
    return createResponse(200, body);
  } catch (err: any) {
    return createResponse(500, err.message);
  }
};
