import { HeartIcon } from "@heroicons/react/24/solid";
import { ImgHTMLAttributes } from "react";

export default function Photo({
  className,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  function randomLetter(): string {
    const letter = "abcdefghijklmnopqrstuvwxyz";
    const index = Math.floor(Math.random() * letter.length);
    return letter.charAt(index);
  }

  return (
    <div className="relative">
      <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-sm">
        <HeartIcon className="h-6 w-6 text-neutral-400" />
      </div>
      <img
        loading="lazy"
        className={`h-full w-full object-cover rounded-lg ${className}`}
        src={`https://source.unsplash.com/random?${randomLetter()}`}
        alt="Image name"
        {...rest}
      />
      <div className="absolute flex flex-col bg-white bottom-0 left-0 py-6 px-8 rounded-lg w-[90%] m-[5%]">
        <strong className="text-xl font-semibold">Name</strong>
        <span className="text-base font-medium text-neutral-400">Description</span>
      </div>
    </div>
  );
}
