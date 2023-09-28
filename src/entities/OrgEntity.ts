import { ManyToOne, Property } from "@mikro-orm/postgresql";
import { Organisation } from "./Organisation";

const currentOrg = () => "00000000-0000-0000-0000-000000000001";
export class OrgEntity {
  @ManyToOne({
    entity: () => Organisation,
    primary: true,
    fieldName: "org_id",
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
