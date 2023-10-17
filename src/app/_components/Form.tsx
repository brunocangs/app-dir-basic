"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { createPost } from "../_actions/actions";

export const Form = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: createPost,
    mutationKey: ["create", "post"],
  });
  return (
    <>
      <form action={mutateAsync}>
        <input type="text" name="name" id="name" className="text-black" />
        <input type="submit" value="Submit" disabled={isPending} />
      </form>
      {isPending && <p>Creating post...</p>}
    </>
  );
};
