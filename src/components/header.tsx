import ButtonSave from "./save-button";
import FinderPetLogo from "./finder-pet-logo";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex justify-between p-10 px-4">
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-2">
          <Bars3Icon className="h-10 w-10" />
          <FinderPetLogo />
          <strong className="hidden ml-2">Finder Pet</strong>
        </div>
        <span className="hidden text-custom-gray-300 font-semibold text-sm">let's explore your pet!</span>
      </div>
      <ButtonSave amount={0} />
    </header>
  );
}
