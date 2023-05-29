import User from "@/core/domain/entities/user";
import { userAuthUseCase } from "@/core/main/use-cases";
import userStore from "@/store/user-store";
import { useMutation } from "@tanstack/react-query";

async function userSignIn(input: Input): Promise<User> {
  const user = await userAuthUseCase.execute(input);

  return user;
}

export default function useUserAuth() {
  const { signIn, handleError } = userStore();
  const {
    mutate: dispatchSignIn,
    error,
    isError,
    isLoading,
  } = useMutation<User, unknown, Input, unknown>(
    (input: Input) => userSignIn(input),

    {
      onSuccess: (user: User) => {
        signIn(user);
      },
      onError: (error: any) => {
        //TODO: Implement error handling
        handleError(error.message || "unexpected error");
      },
    }
  );

  return { dispatchSignIn, error, isError, isLoading };
}

type Input = {
  email: string;
  password: string;
};
