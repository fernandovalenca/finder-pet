import User from "@/core/domain/entities/user";
import CreateUserGateway from "@/core/domain/gateways/create-user-gateway";
import { HttpClient } from "../protocols/http";

export default class RemoteCreateUserGateway implements CreateUserGateway {
  constructor(private httpClient: HttpClient) {}

  async create(input: {
    name: string;
    username: string;
    email: string;
    password: string;
  }): Promise<User> {
    try {
      User.create(input);

      const { data } = await this.httpClient.request<User>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/create/user`,
        body: input,
      });

      return {
        name: data!.name,
        email: data!.email,
        image: data!.image,
      };
    } catch (error: any) {
      throw new Error(error.message || "Unexpected error creating user");
    }
  }
}
