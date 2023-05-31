import User from "@/core/domain/entities/user";
import CreateUserGateway from "@/core/domain/gateways/create-user-gateway";

export class CreateUserUseCase {
  constructor(private createUserGateway: CreateUserGateway) {}

  async execute(input: {
    name: string;
    username: string;
    email: string;
    password: string;
  }): Promise<User> {
    const user = await this.createUserGateway.create(input);

    return user;
  }
}
