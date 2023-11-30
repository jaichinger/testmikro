import { MikroORM, defineConfig } from "@mikro-orm/postgresql";
import { EntityA, EntityC } from "src/entities/Entities";

// BigIntType.prototype.ensureComparable = function (...vars: any[]) {
//   return false;
// };

const run = async () => {
  const orm = await MikroORM.init(
    defineConfig({
      dbName: "postgres",
      host: "localhost",
      port: 7432,
      user: "postgres",
      password: "example",
      entities: [EntityA, EntityC],
      migrations: {
        path: "./dist/migrations",
        pathTs: "./src/migrations",
      },
      debug: true,
      allowGlobalContext: true,
    })
  );

  const em = orm.em;

  const c = await em.find(
    EntityC,
    {
      a: [1n, "00000000-0000-0000-0000-000000000001"],
    },
    { populate: ["a"] }
  );

  console.log(
    c,
    c.map((cc) => cc.a)
  );

  await orm.close(true);
};

run();
