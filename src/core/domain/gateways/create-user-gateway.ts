import User from "../entities/user";

export default interface CreateUserGateway {
  create(input: Input): Promise<User>;
}

type Input = {
  name: string;
  username: string;
  email: string;
  password: string;
};
