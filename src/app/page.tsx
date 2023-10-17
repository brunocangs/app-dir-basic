import { unstable_cache as cache } from "next/cache";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import { Form } from "./_components/Form";

const getData = cache(
  async () => {
    return await db.select().from(posts);
  },
  ["Key"],
  {
    tags: ["posts"],
  },
);

export default async function HomePage() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Form />
      {JSON.stringify(data)}
    </main>
  );
}
