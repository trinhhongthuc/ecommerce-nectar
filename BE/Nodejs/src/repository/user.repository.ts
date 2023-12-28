import bcrypt from "bcrypt";
import { createPublicKey, generateKeyPairSync } from "node:crypto";
import { Repository } from "typeorm";
import { CONFIG } from "../configs";
import { ROLES } from "../constants/roles.constant";
import { AppDataSource } from "../database/postgre.database";
import { UserEntities } from "../entities/user.entities";
import { IUser } from "../interfaces";
import { KeyService } from "../services/key.service";
import { generateKeyToken } from "../utils";
import { getInfoData } from "../utils/getInfoData.util";
export class UserRepository extends Repository<UserEntities> {
  private _keyService: KeyService;

  constructor() {
    super(UserEntities, AppDataSource.createEntityManager());
    this._keyService = new KeyService();
  }

  signup = async (body: IUser) => {
    const { email, user_name, password } = body;

    const alreadyUser = await this.findOne({
      where: { email: email },
    });

    if (alreadyUser?.id) {
      return {
        code: "XXX",
        message: "User already registered",
      };
    }

    const passwordHash = await bcrypt.hash(password, CONFIG.COMMON.HASH.SALT);

    const newUser = await this.save({
      ...body,
      roles: [ROLES.USER],
      password: passwordHash,
    });

    if (!newUser.id) {
      return {
        code: "XXX",
        message: "User registered failed!!",
      };
    }

    // create on public key and private key
    const { privateKey, publicKey } = await generateKeyPairSync("rsa", {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
    });

    //save public key
    if (!publicKey)
      return {
        code: "XXX",
        message: "User registered failed!!",
      };

    // save private key
    const publicKeyObject = createPublicKey({
      key: publicKey,
      format: "pem",
    }).export({ type: "spki", format: "pem" });

    console.log(JSON.stringify(publicKey));

    await this._keyService.create({
      user_id: newUser.id,
      key: JSON.stringify(publicKey),
      permissions: ["0000"],
    });

    // gen token from public key
    const token = await generateKeyToken({
      payload: {
        user_id: newUser.id,
      },
      privateKey,
      publicKey,
    });

    return {
      code: "XXX",
      message: "Registered successfully",
      metadata: {
        ...getInfoData({
          currentData: newUser,
          fields: ["email", "user_name", "id"],
        }),
        token,
      },
    };
  };

  login = async (body: Pick<IUser, "email" | "password">) => {
    const { email, password } = body;

    const alreadyUser = await this.findOne({
      where: { email: email },
    });

    if (!alreadyUser) {
      throw new Error(`User not found`);
    }
  };
}
