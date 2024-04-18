import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  MONGODB: process.env.MONGODB,
};
