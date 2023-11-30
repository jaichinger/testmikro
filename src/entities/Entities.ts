import {
  Entity,
  ManyToOne,
  PrimaryKey,
  PrimaryKeyProp,
  Ref,
} from "@mikro-orm/core";

@Entity()
export class EntityA {
  @PrimaryKey()
  orgId!: bigint;

  @PrimaryKey({ type: "uuid" })
  id!: string;

  [PrimaryKeyProp]?: ["orgId", "id"];
}

@Entity()
export class EntityC {
  @ManyToOne({
    entity: () => EntityA,
    primary: true,
    ref: true,
  })
  a!: Ref<EntityA>;
}
