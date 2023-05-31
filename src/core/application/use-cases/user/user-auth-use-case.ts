import User from "@/core/domain/entities/user";
import UserAuthGateway from "@/core/domain/gateways/user-auth-gateway";

export class UserAuthUseCase {
  constructor(private userAuthGateway: UserAuthGateway) {}

  async execute(input: { email: string; password: string }): Promise<User> {
    const user = await this.userAuthGateway.authenticate(input);

    return user;
  }
}
