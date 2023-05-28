import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useForm, SubmitHandler } from "react-hook-form";
import userStore from "@/store/user-store";
import useUserSignIn from "@/queries/user/auth";
import { useEffect } from "react";

type Inputs = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { user } = userStore();

  useEffect(() => {
    console.log(user);
  }, [user]);
  const userSignIn = useUserSignIn();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const res = userSignIn({
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
        <h2 className="font-semibold text-xl mt-14 text-stone-800">Sign in</h2>
      </header>
      <div className="w-full flex flex-col gap-4 my-10">
        <Input
          title="Username or Email"
          type="text"
          className={errors.username && "border-2 border-red-500"}
          {...register("username", { required: true, minLength: 5 })}
        />
        <Input
          title="Password"
          type="password"
          className={errors.password && "border-2 border-red-500"}
          {...register("password", { required: true, minLength: 5 })}
        />
      </div>
      <Button type="submit">Sign in</Button>
    </form>
  );
};
