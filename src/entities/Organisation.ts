import { Entity, PrimaryKey, Property } from "@mikro-orm/postgresql";

@Entity({ tableName: "organisations" })
export class Organisation {
  @PrimaryKey({ type: "uuid", fieldName: "org_id" })
  id!: string;

  @Property()
  name!: string;
}
