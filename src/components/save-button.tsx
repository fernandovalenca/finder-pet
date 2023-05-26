import { classNames } from "@/utils/funtions";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = {
  amount: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const ButtonSave = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ amount = 0 }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "py-2 px-3 flex gap-2 rounded-lg",
          amount === 0
            ? "bg-custom-gray-100 text-custom-gray-200"
            : "bg-red-100 text-red-500"
        )}
      >
        <HeartIcon className="h-6 w-6" />
        <span>{`${amount} PETS`}</span>
      </button>
    );
  }
);

export default ButtonSave;
