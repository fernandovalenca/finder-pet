import Header from "@/components/header";
import SearchInput from "@/components/search-input";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} h-screen flex flex-col bg-neutral-50`}>
      <Header />
      <div className="mx-4">
        <SearchInput />
      </div>
    </main>
  );
}
