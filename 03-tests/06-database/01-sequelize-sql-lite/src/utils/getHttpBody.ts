import { IncomingMessage } from "http";

export default async (req: IncomingMessage) => {
  await new Promise((resolve) => req.on("readable", resolve));
  const buffer = req.read();
  return buffer && Buffer.from(buffer).toString();
};
