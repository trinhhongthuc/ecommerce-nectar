import JWT from "jsonwebtoken";
import { IKeyToken } from "../../interfaces";

export const generateKeyToken = async ({
  payload,
  publicKey,
  privateKey,
}: IKeyToken) => {
  try {
    const accessToken = await JWT.sign(payload, privateKey, {
      expiresIn: "1 days",
      algorithm: "RS256",
    });

    const refreshToken = await JWT.sign(payload, privateKey, {
      expiresIn: "7 days",
      algorithm: "RS256",
    });

    JWT.verify(accessToken, publicKey, (err, decode) => {
      if (err) console.log(err);
      else console.log(decode);
    });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error("Error generating key token");
  }
};
