import axios from "axios";

import { baseUrl } from "./main";

export async function postAuth(data = { name: "", login: "" }) {
  const res = await axios.post(baseUrl + "/auth", data);
  return res.data;
}
