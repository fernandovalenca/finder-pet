import { Photo } from "@/core/domain/entities/photo";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ImgHTMLAttributes } from "react";

type PhotoProps = {
  data: Photo;
} & ImgHTMLAttributes<HTMLImageElement>;

export const PhotoCard = ({ data, className, ...rest }: PhotoProps) => {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-sm">
        <HeartIcon className="h-6 w-6 text-neutral-400" />
      </div>
      <img
        loading="lazy"
        className={`h-full w-full object-cover rounded-lg ${className}`}
        src={data.urls.regular}
        alt={data.description}
        {...rest}
      />
      <div className="absolute flex flex-col bg-white bottom-0 left-0 py-6 px-8 rounded-lg w-[90%] m-[5%]">
        <strong className="text-xl font-semibold">{data.user.name}</strong>
        <span className="text-base font-medium text-neutral-400">
          {data.description}
        </span>
      </div>
    </div>
  );
};
