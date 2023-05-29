import UserAuthGateway from "@/core/domain/gateways/user-auth-gateway";
import { HttpClient } from "../protocols/http";
import User from "@/core/domain/entities/user";

export default class RemoteUserAuthGateway implements UserAuthGateway {
  constructor(private httpClient: HttpClient) {}

  async authenticate(input: {
    email: string;
    password: string;
  }): Promise<User> {
    try {
      const { data } = await this.httpClient.request<User>({
        method: "POST",
        url: "/auth",
        body: input,
      });

      const user = new User(data!);

      return user;
    } catch (error: any) {
      throw new Error("User authentication failed", error);
    }
  }
}
