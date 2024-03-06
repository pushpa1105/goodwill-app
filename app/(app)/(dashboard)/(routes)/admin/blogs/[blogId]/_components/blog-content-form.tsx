"use client";

import { IconBadge } from "@/components/icon-badge";
import { Button } from "@/components/ui/button";
import { calculateReadingTime } from "@/lib/get-reading-time";
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

const test = [
  {
    id: "6a1d1b04-c0a3-4a95-9313-c50c4ab17487",
    type: "heading",
    props: {
      level: 1,
      textColor: "default",
      textAlignment: "center",
      backgroundColor: "default",
    },
    content: [{ text: "Heading one", type: "text", styles: {} }],
    children: [],
  },
  {
    id: "3ae98ace-25a0-405b-9507-4e0788fa94c1",
    type: "heading",
    props: {
      level: 1,
      textColor: "default",
      textAlignment: "left",
      backgroundColor: "default",
    },
    content: [{ text: "Heading Two", type: "text", styles: {} }],
    children: [],
  },
  {
    id: "a84f7f28-1814-47a5-a17d-1ca7be07ca23",
    type: "heading",
    props: {
      level: 2,
      textColor: "default",
      textAlignment: "left",
      backgroundColor: "default",
    },
    content: [{ text: "Sub-heading one", type: "text", styles: {} }],
    children: [],
  },
  {
    id: "79f3fa28-1c35-414a-8270-89cf32991c29",
    type: "paragraph",
    props: {
      textColor: "default",
      textAlignment: "left",
      backgroundColor: "default",
    },
    content: [
      {
        text: "Oh my gosh. I actually found the cover I was hoping to find. This song has always been a favorite. But since losing my dad in September, the lyrics have a whole new meaning. Losing him and wanting him back, the insane rollercoaster of grief makes it feel like no one around me understands. I grew up in St George, we went to Snow Canyon for family hikes almost every Sunday. When I saw it in the background I knew I had to listen. This cover is perfection and I feel like I was meant to see it. Thank you, thank you ️",
        type: "text",
        styles: {},
      },
    ],
    children: [],
  },
  {
    id: "e76a5139-b9de-49d0-9ae8-12a2d7dd21e8",
    type: "paragraph",
    props: {
      textColor: "default",
      textAlignment: "left",
      backgroundColor: "default",
    },
    content: [],
    children: [],
  },
];

interface BlockContentFormProps {
  initialData: Blog;
  blogId: string;
}

export const BlogContentForm = ({
  initialData,
  blogId,
}: BlockContentFormProps) => {
  const router = useRouter();

  const [blocks, setBlocks] = useState<any>(initialData.content || null);

  const blogContentBlocks = null;

  const updateBlogContentBlocks = (value: any) => {
    setBlocks(value);
  };

  const updateBlog = async () => {
    try {
      // const title = blocks.find(
      //   (block: any) =>
      //     block.type === "heading" &&
      //     block?.content.length > 0 &&
      //     block?.content[0]?.text
      // )?.content[0].text;
      // const description = blocks.find(
      //   (block: any) =>
      //     block.type === "paragraph" &&
      //     block?.content.length > 0 &&
      //     block?.content[0]?.text
      // )?.content[0].text;

      const imageUrl =
        blocks.find((block: any) => block.type === "image" && block?.props?.url)
          ?.props?.url || "/blog.png";

      // if (!title) toast.error("Add something  as heading for title");
      // if (!description)
      //   toast.error("Add something  as paragraph for description");
      // if (!title || !description) return;

      const readTime = calculateReadingTime(blocks);

      await axios.patch(`/api/blogs/${blogId}`, {
        content: blocks,
        // title,
        // description,
        imageUrl,
        readTime,
      });
      toast.success("Blog updated succesfully.");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

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
