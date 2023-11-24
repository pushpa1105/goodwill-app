import { db } from "@/lib/db";
import { Blog, BlogCategory } from "@prisma/client";

type BlogWithCategory = Blog & {
  category: BlogCategory | null;
};

type GetBlogs = {
  userId?: string;
  title?: string;
  categoryId?: string;
};

export const getBlogs = async ({
  userId,
  title,
  categoryId,
}: GetBlogs): Promise<BlogWithCategory[]> => {
  try {
    const blogs = await db.blog.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
        categoryId,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return blogs;
  } catch (error) {
    console.log("[GET_BLOGS]", error);
    return [];
  }
};
