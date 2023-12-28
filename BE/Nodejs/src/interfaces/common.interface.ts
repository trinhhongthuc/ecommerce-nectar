export interface IPayLoadToken {
  email: string;
  userId: string;
}

export interface IKeyToken {
  payload: any;
  publicKey: string;
  privateKey: string;
}
