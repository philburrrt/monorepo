import { db } from "./db";
import { test } from "db";

const main = async () => {
  await db.insert(test).values({ name: "test" });
  const result = await db.select().from(test);
  console.log("result", result);
};

main();
