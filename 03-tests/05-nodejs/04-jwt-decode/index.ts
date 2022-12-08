import jwt from "jsonwebtoken";

const invite = {
  userId: "etstmjseiotjmoisejtnoisetn",
  orgId: "etstmjseiotjmoisegergreg",
  expTime: Math.floor(Date.now() + 1000 * 60 * 60 * 24 * 7),
};

const token = jwt.sign(JSON.stringify(invite), "secret_key");
console.log("token: " + token);

const inviteData = jwt.verify(token, "secret_key");

console.log("inviteData", inviteData);

const decodedToken = jwt.decode(token) as typeof invite;

console.log("decodedToken: " + JSON.stringify(decodedToken));
console.log(
  "userID: ",
  decodedToken.userId,
  " orgId: ",
  decodedToken.orgId,
  "expTime",
  decodedToken.expTime
);
