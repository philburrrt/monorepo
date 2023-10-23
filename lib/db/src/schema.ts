import { sql } from "drizzle-orm";
import {
  bigint,
  char,
  mysqlTable,
  serial,
  index,
  uniqueIndex,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

import { ETH_ADDRESS_LENGTH } from "./constants";

export const test = mysqlTable(
  "test",
  {
    id: serial("id").primaryKey().autoincrement().notNull(),
    name: varchar("name", { length: 255 }).notNull(),
  },
  (table) => ({
    nameIndex: uniqueIndex("name").on(table.name),
  })
);
