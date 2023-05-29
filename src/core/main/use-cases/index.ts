import { UserAuthUseCase } from "@/core/application/use-cases/user-auth-use-case";
import { photoGateway, userAuthGateway } from "../gateways";
import { FindPhotosUseCase } from "@/core/application/use-cases/find-photos-use-case";

export const userAuthUseCase = new UserAuthUseCase(userAuthGateway);
export const findPhotosUseCase = new FindPhotosUseCase(photoGateway);
