import { DataSource } from "typeorm";
import { CONFIG } from "../configs/index";
import { Entities } from "../entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: CONFIG.DB.USER_NAME,
  password: CONFIG.DB.PASSWORD,
  database: CONFIG.DB.DATABASE,
  synchronize: true,
  logging: true,
  entities: Entities,
  subscribers: [],
  migrations: [],
});

export function connectToPostgresDb() {
  AppDataSource.initialize()
    .then(() => console.log("Connected to Postgres Successfully!"))
    .catch((e) => console.error("Connection Failed!!", e));
}
