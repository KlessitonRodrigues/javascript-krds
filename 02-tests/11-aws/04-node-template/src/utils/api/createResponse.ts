export const createResponse = (code: number, data: any) => {
  return {
    statusCode: code,
    body: JSON.stringify(data),
  };
};
