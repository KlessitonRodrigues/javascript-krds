export const queryToObj = (query: string) => {
  const params = new URLSearchParams(query);
  const obj: Record<string, any> = {};

  params.forEach((value, key) => (obj[key] = value));

  console.log(obj);

  return obj;
};
