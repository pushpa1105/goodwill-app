import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const getUser = async () => {
  const session = await getServerSession(authOptions);

  return { ...session?.user, userId: session?.user?.id };
};
