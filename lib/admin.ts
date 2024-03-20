import { GetUserData } from "@/actions/get-user-data";

export const isAdmin = async () => {
  const user = await GetUserData();
  return user?.isAdmin || user?.isSuperAdmin;
};

export const isSuperAdmin = async () => {
  const user = await GetUserData();
  return user?.isSuperAdmin;
};
