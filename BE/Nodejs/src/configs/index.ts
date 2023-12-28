import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  APP: {
    PORT: process.env.PORT || 3001,
  },
  HEADER: {
    X_API_KEY: "x-api-key",
  },
  DB: {
    PORT: (process.env.DB_PORT as unknown as number) || 5432,
    USER_NAME: process.env.DB_USER_NAME || "postgres",
    PASSWORD: process.env.DB_PASSWORD || "123456",
    DATABASE: process.env.DB_NAME || "Anonymous",
    HOST: process.env.DB_HOST || "localhost",
  },
  COMMON: {
    HASH: {
      SALT: 10,
    },
  },
};
