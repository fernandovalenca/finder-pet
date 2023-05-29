import { Photo } from "@/core/domain/entities/photo";
import { PhotoGateway } from "@/core/domain/gateways/photo-gateway";
import { HttpClient } from "../protocols/http";

export class RemotePhotoGateway implements PhotoGateway {
  constructor(private httpClient: HttpClient) {}

  async findPhotos(input: { query: string; page: number }): Promise<Output> {
    try {
      const { data } = await this.httpClient.request({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_UNSPLASH_BASE_URL}/search/photos?page=${input.page}&query=${input.query}&per_page=15&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
      });

      return {
        total: data.total,
        totalPages: data.totoal_pages,
        photos: data.results,
      };
    } catch {
      throw new Error("Could not find photos");
    }
  }
}

type Output = {
  total: number;
  totalPages: number;
  photos: Photo[];
};
