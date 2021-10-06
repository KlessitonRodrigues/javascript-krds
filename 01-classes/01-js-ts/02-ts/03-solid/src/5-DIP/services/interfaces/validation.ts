export type Status = {
  success: 0 | 1;
  infoMsg: string;
};

export interface ValidationInterface {
  success(msg: string): Status;
  error(msg: string): Status;
}
