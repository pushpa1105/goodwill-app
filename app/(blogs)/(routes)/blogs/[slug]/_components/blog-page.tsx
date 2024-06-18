"use client";

import { Separator } from "@/components/ui/separator";
import { BlogComments } from "./comments";
// import Image from "next/image";
import { Blog, BlogCategory, Comment, User } from "@prisma/client";
import BlogLayoutComponent from "./blog-layout";
import dynamic from "next/dynamic";
import { BookOpen, CalendarDays, User as UserIcon } from "lucide-react";
import { formatDate } from "@/lib/format";
import axios from "axios";
import { useEffect } from "react";

interface BlogPageComponentProps {
  blog: Blog & {
    category: BlogCategory;
  };
  author: User;
  toc: {
    id: string;
    text: string;
    level: string;
  }[];
  comments: Comment[];
  user: User | null;
}

const BlockEditor = dynamic(() => import("@/components/block-editor"), {
  ssr: false,
});

export const BlogPageComponent = ({
  blog,
  toc,
  author,
  comments,
  user,
}: BlogPageComponentProps) => {
  useEffect(() => {
    const updateBlogViews = async () => {
      await axios.patch(`/api/blogs/${blog.id}/views`);
    };

    updateBlogViews();
  }, []);
  return (
    <BlogLayoutComponent toc={toc} user={user}>
      <div className="w-full md:w-full md:p-2">
        <div className="h-full m-0 p-0 w-full bg-white">
          <div className="flex flex-col items-center p-2 lg:p-8 m-2 bg-theme text-white rounded-xl w-full lg:w-[70%] m-auto">
            <div>
              <h3 className="text-xl md:text-2xl text-muted p-4 border-b border-slate-400">
                {blog.category.name}
              </h3>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold text-center">
              {blog.title}
            </h1>
            <div className="text-sm md:text-md text-muted text-center my-4">
              {blog.description}
            </div>
            <Separator />

            <div className="flex gap-4 flex-wrap rounded p-2 text-[12px]">
              <div className="flex gap-2">
                <UserIcon size={18} />{" "}
                {!["null null", null, undefined].includes(author?.name) ? author.name : "Admin"}
              </div>
              <div className="flex gap-2">
                <CalendarDays size={18} /> {formatDate(blog.createdAt)}
              </div>
              <div className="flex gap-2">
                <BookOpen size={18} /> {blog.readTime} mins read
              </div>
            </div>
          </div>
          <BlockEditor value={blog.content} isPreview />
          {/* Comments */}
          <BlogComments blog={blog} comments={comments as any} />
          {/* Comments */}
          <Separator />
        </div>
      </div>
    </BlogLayoutComponent>
  );
};
