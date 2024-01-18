import dotenv from "dotenv";

dotenv.config();

export const PORT: number = parseInt(process.env.PORT);
export const MONGODB_URL: string = process.env.MONGODB_URL;
// define more environment variables
