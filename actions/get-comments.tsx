import { db } from "@/lib/db";
import { Comment } from "@prisma/client";

type GetComments = {
  blogId: string;
};

export const getComments = async ({
  blogId,
}: GetComments): Promise<Comment[]> => {
  try {
    const comments = await db.comment.findMany({
      where: {
        blogId,
        parentId: null,
      },
      include: {
        children: {
          include: {
            children: true,
          },
        },
        user: true,
      },
    });

    return comments;
  } catch (error) {
    console.log("[GET_COURSES]", error);
    return [];
  }
};
