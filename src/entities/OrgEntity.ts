import { ManyToOne, Property } from "@mikro-orm/postgresql";
import { Organisation } from "./Organisation";

// This is dynamic in the real app
const currentOrgId = () => "00000000-0000-0000-0000-000000000001";

export class OrgEntity {
  @ManyToOne({
    entity: () => Organisation,
    primary: true,
    fieldName: "org_id",
    mapToPk: true,
    default: null,
  })
  orgId: string = currentOrgId();

  @Property({
    primary: true,
    autoincrement: true,
  })
  id!: bigint;
}
