import Knex from 'knex';
import { MyMigrationSource } from './migration';

const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: 'application.db'
  }
});

export const initDatabase = async () => {
  knex.migrate.latest({migrationSource: new MyMigrationSource()}).then((res) => {
    console.log(res)
  });
}

export default {
  knex,
  initDatabase
}
