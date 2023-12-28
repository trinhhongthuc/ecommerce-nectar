import dotenv from "dotenv";

dotenv.config();

const configs = {
  app: {
    port: process.env.APP_PORT || 3000,
  },
  db: {
    host: process.env.DB_HOST || "localhost",
    name: process.env.DB_NAME || "database",
    port: process.env.DB_PORT || 3055,
  },
};

export default configs;
