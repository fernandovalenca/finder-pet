import User from "@/core/domain/entities/user";
import { userAuthUseCase } from "@/core/main/use-cases";
import userStore from "@/store/user-store";
import { useMutation } from "@tanstack/react-query";

async function userSignIn(input: Input): Promise<User> {
  const user = await userAuthUseCase.execute(input);

  return user;
}

export default function useUserSignIn() {
  const { signIn } = userStore();
  const { mutate } = useMutation<User, unknown, Input, unknown>(
    (input: Input) => userSignIn(input),

    {
      onSuccess: (user: User) => {
        signIn(user);
      },
      onError: (error) => {
        //TODO: Implement error handling
        console.log(error);
      },
    }
  );

  return mutate;
}

type Input = {
  email: string;
  password: string;
};
