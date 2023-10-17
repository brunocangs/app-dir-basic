"use server";

import { revalidateTag } from "next/cache";
import { db } from "~/server/db";

import { posts } from "~/server/db/schema";

export const createPost = async (input: FormData) => {
  await new Promise((res) => setTimeout(res, 1000));
  const post = await db.insert(posts).values({
    name: (input.get("name") as string) ?? "name",
    createdById: "1",
  });
  revalidateTag("posts");
  return post;
};
