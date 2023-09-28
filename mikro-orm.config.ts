import { Options, defineConfig } from "@mikro-orm/postgresql";
import { SeedManager } from "@mikro-orm/seeder";

export default defineConfig({
  dbName: "postgres",
  host: "localhost",
  port: 7432,
  user: "postgres",
  password: "example",
  entities: ["./dist/entities/*.js"],
  entitiesTs: ["./src/entities/*.ts"],
  seeder: {
    emit: "ts",
    path: "./dist/seeders",
    pathTs: "./src/seeders",
    defaultSeeder: "DefaultSeeder",
  },
  migrations: {
    path: "./dist/migrations",
    pathTs: "./src/migrations",
  },
  schemaGenerator: {
    managementDbName: "postgres",
  },
  verbose: true,
  debug: true,
  strict: true,
  extensions: [SeedManager],
});
