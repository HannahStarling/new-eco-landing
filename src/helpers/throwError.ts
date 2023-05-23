export const throwError = ({ message }: { message: string | undefined }) => {
  throw new Error(message);
};
