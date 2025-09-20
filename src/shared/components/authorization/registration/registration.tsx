import { useRegistrationSchema } from "@/shared/schemes/registration.schema.ts";
import { Button } from "@/shared/ui";
import { Input } from "@/shared/ui/input/input.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import type z from "zod/index";

import styles from "./registration.module.scss";

export const Registration = () => {
  const { registrationSchema } = useRegistrationSchema();
  type PersonalDataSchema = z.infer<typeof registrationSchema>;
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PersonalDataSchema>({
    shouldFocusError: false,
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = (data: PersonalDataSchema) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="surname"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            className={styles.input}
            title={"Фамилия"}
            placeholder={"Введите фамилию"}
            value={field.value ?? ""}
            error={!!errors.surname}
            errorText={errors.surname?.message}
          />
        )}
      />
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            className={styles.input}
            title={"Имя"}
            placeholder={"Введите имя"}
            value={field.value ?? ""}
            error={!!errors.name}
            errorText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="patronymic"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            className={styles.input}
            title={"Отчество"}
            placeholder={"Введите отчество"}
            value={field.value ?? ""}
            error={!!errors.patronymic}
            errorText={errors.patronymic?.message}
          />
        )}
      />

      <Controller
        name="direction"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            className={styles.input}
            title={"Направление"}
            placeholder={"Введите направление"}
            value={field.value ?? ""}
            error={!!errors.direction}
            errorText={errors.direction?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            className={styles.input}
            title={"Пароль"}
            placeholder={"Введите пароль"}
            value={field.value ?? ""}
            error={!!errors.password}
            errorText={errors.password?.message}
          />
        )}
      />
      <Controller
        name="confirmation_password"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            className={styles.input}
            title={"Пароль"}
            placeholder={"Подтвердите пароль"}
            value={field.value ?? ""}
            error={!!errors.confirmation_password}
            errorText={errors.confirmation_password?.message}
          />
        )}
      />
      <Button
        className={styles.button}
        htmlType={"submit"}
        children={"Зарегистрироваться"}
        disabled={!isValid}
      />
    </form>
  );
};
