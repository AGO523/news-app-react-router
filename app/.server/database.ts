import * as schema from "~/database/schema";
import type { DrizzleD1Database } from "drizzle-orm/d1";

export async function createNews(
  db: DrizzleD1Database<typeof schema>,
  formData: FormData
): Promise<{ id: number } | null> {
  const email = formData.get("email");
  const topic = formData.get("topic");
  const optionalText = formData.get("optionalText");
  const createdAt = Date.now();

  if (
    typeof email !== "string" ||
    typeof topic !== "string" ||
    (optionalText !== null && typeof optionalText !== "string")
  ) {
    return null;
  }

  const result = await db
    .insert(schema.news)
    .values({
      email,
      topic,
      optionalText: optionalText ?? null,
      progressStatus: "inProgress",
      subscriptionStatus: "subscribed",
      createdAt,
    })
    .returning({ id: schema.news.id })
    .get();

  return result ?? null;
}

// export async function getNews(
//   db: DrizzleD1Database<typeof schema>,
//   id: number
// ): Promise<typeof schema.news.$inferSelect | null> {
//   const news = await db
//     .select()
//     .from(schema.news)
//     .where(schema.news.id.eq(id))
//     .get();

//   return news;
// }
