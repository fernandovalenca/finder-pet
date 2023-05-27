import User from "../entities/user";

export default interface UserAuthGateway {
  authenticate(input: Input): Promise<User>;
}

type Input = {
  email: string;
  password: string;
};
