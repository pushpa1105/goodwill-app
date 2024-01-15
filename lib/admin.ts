export const isAdmin = (userId: string | null) => {
  if(!userId) return false;
  // return userId === process.env.NEXT_PUBLIC_TEACHER;
  return true;
};
