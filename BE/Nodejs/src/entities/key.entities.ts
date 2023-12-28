import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { StatusKeyEnum } from "../types/key";

@Entity("apikey")
export class KeyEntities {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar")
  key!: string;

  @Column("varchar")
  user_id!: string;

  @Column("int2", {
    default: StatusKeyEnum.ACTIVE,
  })
  status!: string;

  @Column("jsonb", {
    default: [],
  })
  permissions!: string[];
}
