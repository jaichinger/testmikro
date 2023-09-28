import { MikroORM, defineConfig } from "@mikro-orm/postgresql";
import { User } from "src/entities/User";

const run = async () => {
  const orm = await MikroORM.init(
    defineConfig({
      dbName: "postgres",
      host: "localhost",
      port: 7432,
      user: "postgres",
      password: "example",
      entities: ["./dist/entities/*.js"],
      entitiesTs: ["./src/entities/*.ts"],
      migrations: {
        path: "./dist/migrations",
        pathTs: "./src/migrations",
      },
      debug: true,
      allowGlobalContext: true,
    })
  );

  const userRepo = orm.em.getRepository(User);

  userRepo.create({
    name: "User 3",
  });

  await orm.em.flush();
  await orm.close(true);
};

run();
