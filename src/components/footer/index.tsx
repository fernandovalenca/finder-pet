export function Footer() {
  return (
    <footer className="">
      <div className="flex items-center justify-between border divide-x-2 text-center">
        <a className="flex-1 py-8  cursor-pointer">Facebook</a>
        <a className="flex-1 py-8 cursor-pointer">Instagram</a>
        <a className="flex-1 py-8 cursor-pointer">Twitter</a>
      </div>
      <h2 className="w-full font-semibold text-5xl sm:text-7xl py-10 pl-6 pr-14 break-words">
        18,313,224<span className="text-red-400"> pets</span> for
        <br />
        you
      </h2>
      <span className="mb-5 ml-6">© 2022 All rights reserved.</span>
    </footer>
  );
}
