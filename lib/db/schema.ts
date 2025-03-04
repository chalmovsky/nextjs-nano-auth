import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  email: text({ length: 255 }).notNull().unique(),
  passwordHash: text().notNull(),
  emailVerified: text().notNull().default("no"),
  tokenForVerificationHash: text().notNull(),
  tokenForVerificationExpiry: int().notNull(),
});
