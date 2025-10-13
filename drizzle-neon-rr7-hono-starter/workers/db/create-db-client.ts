import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export function createDBClient(databaseUrl: string) {
  const sql = neon(databaseUrl);
  const db = drizzle({ client: sql, schema: schema });
  return db;
}
