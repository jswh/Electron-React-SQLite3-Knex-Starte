import { Knex } from "knex";

interface Migration {
  up: (knex: Knex) => PromiseLike<any>;
  down?: (knex: Knex) => PromiseLike<any>;
}

const initial: Migration = {
  async up(knex) {
    return knex.schema
    .createTable('config', function (table) {
        table.string('name', 255).primary();
        table.jsonb('value').nullable();
    })
  },
  async down(){ }
}
// Create a custom migration source class
const migrations: {[key:string]: Migration} = {
  initial,
}
export class MyMigrationSource {
  // Must return a Promise containing a list of migrations.
  // Migrations can be whatever you want,
  // they will be passed as arguments to getMigrationName
  // and getMigration
  async getMigrations() {
    // In this example we are just returning migration names
    return Promise.resolve(Object.keys(migrations));
  }

  getMigrationName(migration: string) {
    return migration;
  }

  async getMigration(migration: string) {
    return migrations[migration];
  }
}
