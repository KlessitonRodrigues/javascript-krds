import { ValidationInterface } from "../entities/interfaces/validation";

export class Validation {
  success(): ValidationInterface {
    return {
      success: true,
    };
  }
  error(msg: string): ValidationInterface {
    return {
      success: false,
      errorMsg: msg,
    };
  }
}
