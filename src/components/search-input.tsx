import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { forwardRef } from "react";

const SearchInput = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div className="p-6 w-full bg-white flex items-center justify-between divide-x-2 border rounded-2xl my-12">
      <div className="flex items-center">
        <MagnifyingGlassIcon className="h-8 w-8 mr-2 text-neutral-400" />
        <input
          ref={ref}
          type="text"
          {...props}
          className="text-xl w-full outline-none text-neutral-600"
          placeholder="What are you searching for?"
        />
      </div>
      <button className="w-44 flex gap-2 ml-2">
        <strong className="text-lg w-full">All Pets</strong>
        <ChevronDownIcon className="h-7 w-7" />
      </button>
    </div>
  );
});

export default SearchInput;
