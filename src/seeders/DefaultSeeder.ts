import { EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { Organisation } from "src/entities/Organisation";
import { User } from "src/entities/User";

export class DefaultSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const org1 = em.create(Organisation, {
      id: "00000000-0000-0000-0000-000000000001",
      name: "Organisation 1",
    });

    const org2 = em.create(Organisation, {
      id: "00000000-0000-0000-0000-000000000002",
      name: "Organisation 2",
    });

    em.create(User, {
      name: "User 1",
      orgId: org1.id,
    });

    em.create(User, {
      name: "User 2",
      orgId: org2.id,
    });
  }
}
