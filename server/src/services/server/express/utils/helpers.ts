export const sanitizeUser = (user: { [key: string]: any }) => {
  return { ...user, password: undefined };
};
