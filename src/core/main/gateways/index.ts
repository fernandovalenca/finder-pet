import RemoteUserAuthGateway from "@/core/application/gateways/remote-user-auth-gateways";
import { httpClient } from "../protocols";
import { RemotePhotoGateway } from "@/core/application/gateways/remote-photo-gateway";

export const userAuthGateway = new RemoteUserAuthGateway(httpClient);
export const photoGateway = new RemotePhotoGateway(httpClient);
