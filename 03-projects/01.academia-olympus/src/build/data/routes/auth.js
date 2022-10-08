import request from "../request";

export async function userAuth(user) {
  return await request("POST", "/auth", user);
}
