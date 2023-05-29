import { useFindPhotos } from "@/queries/photos";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { forwardRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  search: string;
};

export const SearchInput = forwardRef<HTMLInputElement>((props, ref) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { dispatchFindPhoto } = useFindPhotos();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatchFindPhoto({ query: data.search, page: 1 });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 w-full max-w-5xl bg-white flex items-center justify-between divide-x-2 border rounded-2xl my-12 sm:mt-20"
    >
      <div className="flex items-center">
        <MagnifyingGlassIcon className="h-8 w-8 mr-2 text-neutral-400" />
        <input
          type="text"
          {...props}
          className="text-xl w-full outline-none text-neutral-600"
          placeholder="What are you searching for?"
          {...register("search", { required: true })}
        />
      </div>
      <button type="submit" className="w-44 flex gap-2 ml-2">
        <strong className="text-lg w-full font-medium">All Pets</strong>
        <ChevronDownIcon className="h-7 w-7" />
      </button>
    </form>
  );
});
