import { IUser } from "../interfaces";
import { UserRepository } from "../repository";

export class UserService {
  private _userRepository: UserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  signup = async (body: IUser) => {
    return await this._userRepository.signup(body);
  };

  login = async (body: Pick<IUser, "email" | "password">) => {
    return this._userRepository.login(body);
  };
}
