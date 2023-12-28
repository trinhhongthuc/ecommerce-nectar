import { KeyRepository } from "../repository";
import { CreateKey } from "../types/key";

export class KeyService {
  private _keyRepository: KeyRepository;

  constructor() {
    this._keyRepository = new KeyRepository();
  }

  create = async (body: CreateKey) => {
    try {
      return this._keyRepository.createKey(body);
    } catch (error) {
      return error;
    }
  };

  findByKey = async (key: string) => {
    try {
      return await this._keyRepository.findByKey(key);
    } catch (error) {
      console.error(error);
    }
  };
}
