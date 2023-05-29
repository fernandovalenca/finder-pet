import { Photo } from "../entities/photo";

export interface PhotoGateway {
  findPhotos(input: Input): Promise<Output>;
}

type Input = { query: string; page: number };

type Output = {
  total: number;
  totalPages: number;
  photos: Photo[];
};
