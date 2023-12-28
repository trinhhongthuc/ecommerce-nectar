import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "../types";

@Entity({
  name: "user",
})
export class UserEntities {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar", { name: "user_name" })
  user_name!: string;

  @Column("varchar", {
    unique: true,
  })
  email!: string;

  @Column("varchar")
  password!: string;

  @Column("boolean", {
    default: false,
  })
  verify!: string;

  @Column("jsonb", {
    default: [],
    // array: true,
    nullable: true,
  })
  roles!: RoleEnum[];
}
