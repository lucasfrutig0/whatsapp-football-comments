import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "../.env");

dotenv.config({
  path: envPath,
});

export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
export const PORT = process.env.PORT;
export const PHONE_NUMBER = process.env.PHONE_NUMBER;
export const API_SCRT = process.env.API_SCRT;
export const API_URL = process.env.API_URL;
export const API_HOST = process.env.API_HOST;
export const TIMEZONE = "America/Sao_Paulo";
