import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Password from "@/core/domain/entities/password";
import useCreateUser from "@/queries/user/create-user";

const createUserFormSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  username: z.string().min(6, "Username must be at least 6 characters long"),
  name: z
    .string()
    .nonempty("Name is required")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  password: z
    .string()
    .min(6, "The password must have at least 6 characters")
    .refine((password) => {
      try {
        new Password(password);
        return true;
      } catch (error) {
        return false;
      }
    }, "Invalid password"),
});

type CreateUserFormSchemaType = z.infer<typeof createUserFormSchema>;

export const SignUpForm = () => {
  const { dispatchCreateUser } = useCreateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormSchemaType>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit: SubmitHandler<CreateUserFormSchemaType> = (data) => {
    try {
      dispatchCreateUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center justify-center"
    >
      <header className="w-full flex flex-col items-center justify-center">
        <h2 className="font-semibold text-xl mt-14 text-stone-800 dark:text-neutral-100">
          Create an account
        </h2>
      </header>
      <div className="w-full flex flex-col gap-4 my-10">
        <div className="relative">
          <Input
            title="Email Address"
            type="email"
            className={errors.email && "border-2 border-red-500"}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className=" absolute -bottom-4 text-red-600 text-xs">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="relative">
          <Input
            title="name"
            type="text"
            className={errors.name && "border-2 border-red-500"}
            {...register("name", { required: true, minLength: 6 })}
          />
          {errors.name && (
            <span className=" absolute -bottom-4 text-red-600 text-xs">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="relative">
          <Input
            title="Username"
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

      <Button type="submit">Sign in</Button>
    </form>
  );
};
