import { Photo } from "@/core/domain/entities/photo";
import { findPhotosUseCase } from "@/core/main/use-cases";
import photoStore from "@/store/photo-store";
import { useMutation } from "@tanstack/react-query";

async function queryFindPhoto(input: Input): Promise<Output> {
  const data = await findPhotosUseCase.execute({
    page: input.page,
    query: input.query,
  });

  return {
    ...data,
    searchText: input.query,
    currentPage: input.page,
  };
}

export function useFindPhotos() {
  const { findPhotos, handleError } = photoStore();
  const {
    mutate: dispatchFindPhoto,
    error,
    isError,
    isLoading,
  } = useMutation<Output, unknown, Input, unknown>(
    (input: Input) => queryFindPhoto(input),

    {
      onSuccess: (output) => {
        findPhotos(output);
      },
      onError: (error: any) => {
        //TODO: Implement error handling
        handleError(error.message || "unexpected error");
      },
    }
  );

  return { dispatchFindPhoto, error, isError, isLoading };
}

export function useShowMorePhotos() {
  const { showMorePhotos, handleError } = photoStore();
  const {
    mutate: dispatchFindPhoto,
    error,
    isError,
    isLoading,
  } = useMutation<Output, unknown, Input, unknown>(
    (input: Input) => queryFindPhoto(input),

    {
      onSuccess: (output) => {
        showMorePhotos(output);
      },
      onError: (error: any) => {
        //TODO: Implement error handling
        handleError(error.message || "unexpected error");
      },
    }
  );

  return { dispatchFindPhoto, error, isError, isLoading };
}

type Input = {
  query: string;
  page: number;
};

type Output = {
  total: number;
  currentPage: number;
  searchText: string;
  photos: Photo[];
};
