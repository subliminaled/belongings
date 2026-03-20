import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const ourFileRouter = {
  storyImageUploader: f({ image: { maxFileSize: '4MB', maxFileCount: 2 } }).onUploadComplete(
    async () => {
      // No server-side side-effects needed at upload time.
    },
  ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
