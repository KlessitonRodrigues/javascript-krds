const baseUrl = "http://localhost:3000";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export default async function request(method, path, body = {}) {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });
  return await res.json();
}
