"use client";

import { IconBadge } from "@/components/icon-badge";
import { Button } from "@/components/ui/button";
import { Blog } from "@prisma/client";
import axios from "axios";
import { LayoutDashboard } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const BlockEditor = dynamic(() => import("@/components/block-editor"), {
  ssr: false,
});

interface BlockContentFormProps {
  initialData: Blog;
  blogId: string;
}

export const BlogContentForm = ({
  initialData,
  blogId,
}: BlockContentFormProps) => {
  const router = useRouter();

  const [blocks, setBlocks] = useState<any>([
    {
      id: "6a1d1b04-c0a3-4a95-9313-c50c4ab17487",
      type: "paragraph",
      props: {
        textColor: "default",
        backgroundColor: "default",
        textAlignment: "left",
      },
      content: [{ type: "text", text: "Test is here", styles: {} }],
      children: [],
    },
    {
      id: "1094180f-dab0-4428-9d3e-1d2714f8a57d",
      type: "paragraph",
      props: {
        textColor: "default",
        backgroundColor: "default",
        textAlignment: "left",
      },
      content: [],
      children: [],
    },
  ]);

  const blogContentBlocks = null;

  const updateBlogContentBlocks = (value: any) => {
    // console.log(
    //   "----------------------------------------------------------------parent one---------------------",
    //   value
    // );
    setBlocks(value);
    // console.log(blocks);
  };

  const updateBlog = async () => {
    try {
      // console.log("----------inside save-------", blocks);
      await axios.patch(`/api/blogs/${blogId}`, { content: blocks });
      toast.success("Title updated succesfully.");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // useEffect(() => {
  //   console.log(blocks, "fjdhfdjhfjdhfjdhfjdhfjdhfjdhfjdhjfdjfdjfhdj");
  //   router.refresh();
  // }, [blocks, router]);
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="flex items-center mb-5 flex justify-between">
        <div>
          <h2 className="text-xl">Customize your blog content</h2>
        </div>
        <div>
          <Button onClick={updateBlog}>Save</Button>
        </div>
      </div>
      <BlockEditor
        value={initialData.content}
        onChange={updateBlogContentBlocks}
      />
    </div>
  );
};
