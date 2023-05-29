import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Logo } from "../logo";
import { ButtonSave } from "../button-save";
import { useSession } from "next-auth/react";
import { User } from "../user";

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between p-10 px-4">
      <div className="flex-1 flex items-center justify-start gap-6">
        <div className="flex items-center justify-center gap-2">
          <Bars3Icon className="h-10 w-10" />
          <Logo />
          <strong className="hidden md:block ml-2">Finder Pet</strong>
        </div>
        <span className="hidden md:block text-custom-gray-300 font-semibold text-sm">
          let's explore your pet!
        </span>
      </div>
      <div className="flex-1 flex items-center justify-end lg:justify-between">
        <nav className="hidden ml-20 lg:flex gap-8">
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </nav>
        <ButtonSave amount={99999} />
        <User />
      </div>
    </header>
  );
}
