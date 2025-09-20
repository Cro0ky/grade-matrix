import { z } from "zod";

export const useRegistrationSchema = () => {
  const registrationSchema = z.object({
    surname: z.string(),
    name: z.string(),
    patronymic: z.string(),

    direction: z.string(),
    current_position: z.string(),

    password: z.string(),
    confirmation_password: z.string(),
  });

  return { registrationSchema };
};
