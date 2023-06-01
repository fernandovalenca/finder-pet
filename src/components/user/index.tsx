import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export const User = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden lg:flex gap-2 items-center justify-center">
      <Image
        loading="lazy"
        width={500}
        height={500}
        placeholder="blur"
        priority={true}
        quality={80}
        fill={true}
        className="h-9 w-9 rounded-full"
        src={session?.user?.image || ""}
        alt="Foto do usuário logado"
      />
      <button onClick={() => signOut()}>
        <ChevronDownIcon className="h-6 w-6" />
      </button>
    </div>
  );
};
