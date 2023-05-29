import { UserAuthUseCase } from "@/core/application/use-cases/user-auth-use-case";
import { userAuthGateway } from "../gateways";

export const userAuthUseCase = new UserAuthUseCase(userAuthGateway);
