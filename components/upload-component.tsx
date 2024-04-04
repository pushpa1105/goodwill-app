"use client";

import axios from "axios";
import { UploadCloud, Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Input } from "./ui/input";
import toast from "react-hot-toast";

interface UploadComponentProps {
  fileType: "image" | "video" | "document";
  onClientUploadComplete: (url?: string) => void;
}

const acceptType = {
  image: {
    "image/png": [".png", ".PNG"],
    "image/jpeg": [".jpg", ".jpeg", ".JPG", ".JPEG"],
  },
  video: {
    "video/mp4": [".mp4", ".MP4"],
  },
  document: {
    "application/pdf": [".pdf"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
    "application/msword": [".doc"],
    "text/plain": [".txt"],
  },
};

export default function ImageUpload({
  onClientUploadComplete,
  fileType = "image",
}: UploadComponentProps) {
  const [isUploading, setIsUploading] = useState(false);

  const uploadImageToCloudinary = async (formData: FormData) => {
    setIsUploading(true);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${
          process.env.NEXT_PUBLIC_CLOUD_NAME
        }/${fileType === "video" ? "video" : "image"}/upload`,
        formData
      )
      .then((res: any) => {
        console.log(res);
        onClientUploadComplete(res.data.url);
      })
      .catch((err: any) => {
        toast.error("Upload Failed");
      })
      .finally(() => {
        setIsUploading(false);
      });
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", uploadedFile);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_UPLOAD_PRESET as string
    );

    return uploadImageToCloudinary(formData);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    accept: acceptType[fileType],
  });

  return (
    <div>
      {!isUploading ? (
        <div className="">
          <label
            {...getRootProps()}
            className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
          >
            <div className=" text-center">
              <div className=" border p-2 rounded-md max-w-min mx-auto">
                <UploadCloud size={20} />
              </div>

              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">Drag files</span>
              </p>
              <p className="text-xs text-gray-500">
                Click to upload files &#40;files should be under 10 MB &#41;
              </p>
            </div>
          </label>
          {isUploading && (
            <Input
              {...getInputProps()}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          )}
        </div>
      ) : (
        <div className="">
          <label className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
            <div className=" text-center">
              <div className=" border p-2 rounded-md max-w-min mx-auto">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>

              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold">Uploading...</span>
              </p>
              <p className="text-xs text-gray-500"></p>
            </div>
          </label>
        </div>
      )}
    </div>
  );
}
