import { isAdmin } from "@/lib/admin";
import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
  const { userId } = auth();

  const isAuthorized = await isAdmin();

  if (!userId || !isAuthorized) throw new Error("Unauthorized");
  return { userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),
  courseVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(async () => await handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
