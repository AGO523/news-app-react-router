import type { Config } from "drizzle-kit";

export default {
  out: "./drizzle",
  schema: "./database/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    databaseId: "06272e4c-ff19-49c4-b6c5-bdc5680135e3",
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    token: process.env.CLOUDFLARE_TOKEN!,
  },
} satisfies Config;
