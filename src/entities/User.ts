import { Entity, Property } from "@mikro-orm/postgresql";
import { OrgEntity } from "./OrgEntity";

@Entity({ tableName: "users" })
export class User extends OrgEntity {
  @Property()
  name!: string;
}
