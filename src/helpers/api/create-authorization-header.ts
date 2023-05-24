export const createAuthorizationHeader = (token: string) => {
  return `Bearer ${token}`;
};
