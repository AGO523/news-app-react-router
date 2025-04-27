import * as schema from "~/database/schema";
import type { DrizzleD1Database } from "drizzle-orm/d1";

export async function createNews(
  db: DrizzleD1Database<typeof schema>,
  formData: FormData
): Promise<Response> {
  const email = formData.get("email");
  const topic = formData.get("topic");
  const optionalText = formData.get("optionalText");
  const progressStatus = formData.get("progressStatus");
  const subscriptionStatus = formData.get("subscriptionStatus");
  const userIdRaw = formData.get("userId");
  const createdAt = Date.now();

  if (
    typeof email !== "string" ||
    typeof topic !== "string" ||
    (optionalText !== null && typeof optionalText !== "string") ||
    (progressStatus !== null && typeof progressStatus !== "string") ||
    (subscriptionStatus !== null && typeof subscriptionStatus !== "string") ||
    (userIdRaw !== null && typeof userIdRaw !== "string")
  ) {
    return new Response("Invalid form data", { status: 400 });
  }

  const userId = userIdRaw ? parseInt(userIdRaw, 10) : 0;

  const result = await db
    .insert(schema.news)
    .values({
      email,
      topic,
      optionalText: optionalText ?? null,
      progressStatus: progressStatus ?? undefined,
      subscriptionStatus: subscriptionStatus ?? undefined,
      createdAt,
      userId,
    })
    .returning({ id: schema.news.id })
    .get();

  if (result) {
    return new Response("Topic created successfully", { status: 201 });
  } else {
    return new Response("Failed to create topic", { status: 500 });
  }
}
