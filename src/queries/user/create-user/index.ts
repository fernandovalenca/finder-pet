import User from "@/core/domain/entities/user";
import { createUserUseCase } from "@/core/main/use-cases";
import userStore from "@/store/user-store";
import { useMutation } from "@tanstack/react-query";

async function createUser(input: Input): Promise<User> {
  const user = await createUserUseCase.execute(input);
  return user;
}

export default function useCreateUser() {
  const { signIn, handleError } = userStore();

  const {
    mutate: dispatchCreateUser,
    error,
    isError,
    isLoading,
  } = useMutation<User, unknown, Input, unknown>(
    (input: Input) => createUser(input),

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

  return { dispatchCreateUser, error, isError, isLoading };
}

type Input = {
  email: string;
  name: string;
  username: string;
  password: string;
};
