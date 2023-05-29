import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-2 items-center justify-center">
      <img
        className="h-9 w-9 rounded-full"
        src={session?.user?.image || ""}
        alt=""
      />
      <button>
        <ChevronDownIcon className="h-6 w-6" />
      </button>
    </div>
  );
};
