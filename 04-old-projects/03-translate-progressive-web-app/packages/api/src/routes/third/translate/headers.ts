import { AxiosRequestHeaders } from "axios";

export const url = process.env.RAPIDAPI_URL || "";

export const headers: AxiosRequestHeaders = {
  "Content-Type": "application/x-www-form-urlencoded",
  "x-rapidapi-host": process.env.RAPIDAPI_HOST || "",
  "x-rapidapi-key": process.env.RAPIDAPI_KEY || "",
};