"use server";
import { z } from "zod";

export async function getVideoComments(formdata: FormData) {
  const schema = z.object({
    videoUrl: z.string().min(1),
  });

  const data = schema.parse({
    video_url: formdata.get("video_url"),
  });

  try {
    return { success: true, error: null };
  } catch (e) {
    return { success: false, error: "Failed to fetch" };
  }
}
