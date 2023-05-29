import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  name: string;
  username: string;
  password: string;
};

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center justify-center"
    >
      <header className="w-full flex flex-col items-center justify-center">
        <h2 className="font-semibold text-xl mt-14 text-stone-800">
          Create an account
        </h2>
      </header>
      <div className="w-full flex flex-col gap-4 my-10">
        <Input
          title="Email Address"
          type="email"
          className={errors.username && "border-2 border-red-500"}
          {...register("username", { required: true })}
        />
        <Input
          title="Name"
          type="text"
          className={errors.password && "border-2 border-red-500"}
          {...register("email", { required: true, minLength: 6 })}
        />
        <Input
          title="Username"
          type="text"
          className={errors.password && "border-2 border-red-500"}
          {...register("name", { required: true, minLength: 6 })}
        />
        <Input
          title="Password"
          type="password"
          className={errors.password && "border-2 border-red-500"}
          {...register("password", { required: true, minLength: 6 })}
        />
      </div>

      <Button type="submit">Sign in</Button>
    </form>
  );
};
