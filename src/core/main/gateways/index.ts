import { httpClient } from "../protocols";
import RemotePhotoGateway from "@/core/application/gateways/remote-photo-gateway";
import RemoteUserAuthGateway from "@/core/application/gateways/remote-user-auth-gateways";
import RemoteCreateUserGateway from "@/core/application/gateways/remote-create-user-gateway";

export const photoGateway = new RemotePhotoGateway(httpClient);
export const userAuthGateway = new RemoteUserAuthGateway(httpClient);
export const createUserGateway = new RemoteCreateUserGateway(httpClient);
