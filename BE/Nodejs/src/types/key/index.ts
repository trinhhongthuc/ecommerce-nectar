export type CreateKey = {
  key: string;
  user_id: string;
  permissions: string[]
};

export enum StatusKeyEnum {
  ACTIVE,
  IN_ACTIVE,
}
