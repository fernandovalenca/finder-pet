import { PhotoGateway } from "@/core/domain/gateways/photo-gateway";

export class FindPhotosUseCase {
  constructor(private photoGateway: PhotoGateway) {}

  async execute(input: { query: string; page: number }) {
    const data = await this.photoGateway.findPhotos(input);

    return data;
  }
}
