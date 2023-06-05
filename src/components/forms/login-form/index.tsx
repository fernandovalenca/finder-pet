import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useForm, SubmitHandler } from "react-hook-form";
import useUserAuth from "@/queries/user/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
  username: z.string().nonempty("Enter an email or username"),
  password: z.string().min(6, "The password must have at least 6 characters"),
});

type LoginFormSchemaType = z.infer<typeof loginFormSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  });

  const { dispatchSignIn, error } = useUserAuth();

  const onSubmit: SubmitHandler<LoginFormSchemaType> = (data) => {
    dispatchSignIn({
      email: data.username,
      password: data.password,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center justify-center"
    >
      <header className="w-full flex flex-col items-center justify-center">
        <h2 className="font-semibold text-xl mt-14 text-stone-800 dark:text-neutral-100">Sign in</h2>
      </header>
      <div className="w-full flex flex-col gap-4 my-10">
        <div className="relative">
          <Input
            title="Username or Email"
            type="text"
            className={errors.username && "border-2 border-red-500"}
            {...register("username", { required: true, minLength: 6 })}
          />
          {errors.username && (
            <span className=" absolute -bottom-4 text-red-600 text-xs">
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="relative">
          <Input
            title="Password"
            type="password"
            className={errors.password && "border-2 border-red-500"}
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && (
            <span className=" absolute -bottom-4 text-red-600 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <div className="relative w-full">
        {!!error && (
          <span className=" absolute w-full text-center -top-4 text-red-600 text-xs">
            {error.message || "Unexpected authorization error"}
          </span>
        )}
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  );
};
