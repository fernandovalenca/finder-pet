import { UserAuthUseCase } from "@/core/application/use-cases/user/user-auth-use-case";
import { FindPhotosUseCase } from "@/core/application/use-cases/photo/find-photos-use-case";
import { createUserGateway, photoGateway, userAuthGateway } from "../gateways";
import { CreateUserUseCase } from "@/core/application/use-cases/user/create-user-use-case";

export const userAuthUseCase = new UserAuthUseCase(userAuthGateway);
export const findPhotosUseCase = new FindPhotosUseCase(photoGateway);
export const createUserUseCase = new CreateUserUseCase(createUserGateway);
