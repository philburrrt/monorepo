import { sql } from "drizzle-orm";
import {
  bigint,
  char,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

import { ETH_ADDRESS_LENGTH } from "./constants";

export const test = mysqlTable("test", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});
