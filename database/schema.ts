import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const guestBook = sqliteTable("guestBook", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
});

export const news = sqliteTable("news", {
  id: integer().primaryKey({ autoIncrement: true }),
  userId: integer().default(0),
  email: text().notNull(),
  topic: text().notNull(),
  optionalText: text(),
  progressStatus: text().notNull().default("pending"),
  subscriptionStatus: text().notNull().default("subscribed"),
  createdAt: integer().notNull(),
});
