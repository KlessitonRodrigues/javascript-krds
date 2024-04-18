import mongoose from 'mongoose';

import { env } from './dotenv';

export const dbConnect = async () => {
  if (env.MONGODB) await mongoose.connect(env.MONGODB);
};

export const dbDisconnect = async () => {
  if (env.MONGODB) await mongoose.disconnect();
};

process.on('exit', dbDisconnect);
