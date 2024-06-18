import { User } from "@prisma/client";

interface SessionUser extends Partial<User> {
  randomKey: string;
}

type UserType = Partial<SessionUser | null | undefined>;

export const isAdmin = (user: UserType) => {
  return user?.isAdmin || user?.isSuperAdmin;
};

export const isUser = (user: UserType) => {
  return !!user;
};

export const isBlogAdmin = (user: UserType) => {
  return user?.isAdmin || user?.isSuperAdmin || user?.isBlogAdmin;
};

export const isCourseAdmin = (user: UserType) => {
  return user?.isAdmin || user?.isSuperAdmin || user?.isCourseAdmin;
};

export const isSuperAdmin = (user: UserType) => {
  return user?.isSuperAdmin;
};
