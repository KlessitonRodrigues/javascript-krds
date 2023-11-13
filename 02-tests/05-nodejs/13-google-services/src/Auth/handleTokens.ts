import { google, Auth } from "googleapis";

type JWTClient = Auth.JWT;

type AuthCredentials = {
  email: string;
  key: string;
  scopes: string[];
};

export const getJWTClient = (credentials: AuthCredentials): JWTClient => {
  return new google.auth.JWT(credentials);
};

export const getTokens = async (jwt: JWTClient) => {
  return new Promise<JWTClient>((resolve, reject) => {
    jwt.authorize((err, tokens) => {
      if (err) return reject(err);
      console.log("Access token", tokens);
      resolve(jwt);
    });
  });
};

export const refreshTokens = async (jwt: JWTClient) => {
  return new Promise<JWTClient>((resolve, reject) => {
    jwt.refreshAccessToken((err, tokens) => {
      if (err) return reject(err);
      console.log("Refreshed token", tokens);
      resolve(jwt);
    });
  });
};
