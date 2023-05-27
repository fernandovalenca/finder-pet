import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = {
  title: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ title, ...rest }, ref) => {
    return (
      <label className="text-sm font-semibold flex flex-col gap-2 text-stone-800">
        {title}
        <input className="w-full p-2 ring-1 ring-neutral-200 rounded-lg text-neutral-700 focus:outline-none active:outline-none" ref={ref} {...rest} />
      </label>
    );
  }
);

export default Input;
