import { EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { EntityA, EntityC } from "src/entities/Entities";

export class DefaultSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const a = em.create(EntityA, {
      orgId: 1n,
      id: "00000000-0000-0000-0000-000000000001",
    });

    em.create(EntityC, {
      a,
    });
  }
}
