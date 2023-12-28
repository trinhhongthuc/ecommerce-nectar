import { Repository } from "typeorm";
import { AppDataSource } from "../database/postgre.database";
import { KeyEntities } from "../entities/key.entities";
import { CreateKey } from "../types/key";

export class KeyRepository extends Repository<KeyEntities> {
  constructor() {
    super(KeyEntities, AppDataSource.createEntityManager());
  }

  createKey = async (body: CreateKey) => {
    try {
      const newKey = await this.save(body);

      return {
        code: "XXX",
        message: "Successfully created key",
        metadata: newKey,
      };
    } catch (error) {
      return error;
    }
  };

  findByKey = async (key: string) => {
    try {
      const existKey = await this.findOneBy({ key: key });

      return {
        code: "XXX",
        message: "Successfully created key",
        metadata: existKey ? existKey : null,
      };
    } catch (error) {
      console.error(error);
    }
  };
}
