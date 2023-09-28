import { ManyToOne, Property } from "@mikro-orm/postgresql";
import { Organisation } from "./Organisation";

const currentOrg = () => {
  return (
    "00000000-0000-0000-0000-00000000000" +
    Math.floor(Math.random() * 2 + 1).toString()
  );
};

export class OrgEntity {
  @ManyToOne({
    fieldName: "org_id",
    entity: () => Organisation,
    mapToPk: true,
    default: null,
  })
  orgId!: string;

  @Property({
    primary: true,
    autoincrement: true,
  })
  id!: bigint;

  constructor() {
    this.orgId = currentOrg();
  }
}
