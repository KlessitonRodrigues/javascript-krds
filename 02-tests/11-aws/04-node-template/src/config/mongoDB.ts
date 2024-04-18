import mongoose from 'mongoose';

import { env } from './dotenv';

export const databaseConnect = async () => {
  if (env.MONGODB) await mongoose.connect(env.MONGODB);
  console.log('DATABASE CONNECTED!');
};
