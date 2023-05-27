import RemoteUserAuthGateway from "@/core/application/gateways/remote-user-auth-gateways";
import { httpClient } from "../protocols";

export const userAuthGateway = new RemoteUserAuthGateway(httpClient);