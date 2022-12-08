import request from "../request";

export function getClients() {
  return request("GET", "/manager");
}

export function postClient(client) {
  return request("POST", "/manager", client);
}
