import { getJWTClient, getTokens, refreshTokens } from "./Auth/handleTokens";
import { getTreading } from "./Youtube/trendings";

const main = async () => {
  const creds = {
    email: "",
    key: "",
    scopes: ["https://www.googleapis.com/auth/youtube.readonly"],
  };

  const jwt = getJWTClient(creds);
  // getTokens(jwt);
  // refreshTokens(jwt);
  getTreading(jwt);
};

main().catch(console.error);
