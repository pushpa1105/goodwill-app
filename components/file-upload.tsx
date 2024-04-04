"use client";

import toast from "react-hot-toast";

// import { UploadDropzone } from "@/lib/uploadthing";
// import { OurFileRouter, ourFileRouter } from "@/app/api/uploadthing/core";
import ImageUpload from "./upload-component";

interface FileUploadProps {
  onChange: (url?: string) => void;
  fileType: "image" | "video" | "document";
  // endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({
  onChange,
  fileType = "image",
}: FileUploadProps) => {
  return (
    // <UploadDropzone
    //   endpoint={endpoint}
    //   onClientUploadComplete={(res) => {
    //     onChange(res?.[0].url);
    //   }}
    //   onUploadError={(error: Error) => {
    //     toast.error(`${error?.message}`);
    //   }}
    // />
    <ImageUpload
      fileType={fileType}
      onClientUploadComplete={(url) => {
        onChange(url);
      }}
    />
  );
};
