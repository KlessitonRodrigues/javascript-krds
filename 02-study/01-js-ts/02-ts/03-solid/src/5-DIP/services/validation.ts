import { ValidationInterface, Status } from "./interfaces/validation";

export class Validation implements ValidationInterface {
  success(infoMsg: string): Status {
    return {
      success: 1,
      infoMsg: infoMsg,
    };
  }
  error(infoMsg: string): Status {
    return {
      success: 0,
      infoMsg: infoMsg,
    };
  }
}
