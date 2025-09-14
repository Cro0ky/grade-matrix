import { z } from "zod";

export const useLoginSchema = () => {
  const loginSchema = z.object({
    login: z.string(),
    password: z.string(),
  });

  return { loginSchema };
};
