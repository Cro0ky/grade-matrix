import { Layout } from "@/shared/components";
import { useLoginSchema } from "@/shared/schemes/login.schema.ts";
import { Button } from "@/shared/ui";
import { Input } from "@/shared/ui/input/input.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import type z from "zod";

import styles from "./login.module.scss";

export const Login = () => {
  const { loginSchema } = useLoginSchema();
  type PersonalDataSchema = z.infer<typeof loginSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PersonalDataSchema>({
    shouldFocusError: false,
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = (data: PersonalDataSchema) => {
    console.log(data);
  };

  return (
    <Layout className={styles.layout} title={"Войдите в аккаунт"}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="login"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              className={styles.input}
              title={"Логин"}
              placeholder={"Введите логин"}
              value={field.value ?? ""}
              error={!!errors.login}
              errorText={errors.login?.message}
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
        <Button
          className={styles.button}
          htmlType={"submit"}
          children={"Войти"}
          disabled={!isValid}
        />
      </form>
    </Layout>
  );
};
