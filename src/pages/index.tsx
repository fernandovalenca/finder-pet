import BaseButton from "@/components/base-button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Photo from "@/components/photo";
import SearchInput from "@/components/search-input";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function Home() {
  function isMultipleOfSix(index: number): boolean {
    return index % 3 === 0;
  }

  return (
    <main className={`w-full flex flex-col bg-neutral-50 ${inter.className}`}>
      <Header />
      <div className="relative mx-4">
        <SearchInput />
        <div className="columns-1 sm:columns-2 md:columns-3">
          {photos.map((photo, index) => (
            <Photo
              key={index}
              className={
                isMultipleOfSix(index)
                  ? "aspect-9/16 mb-6"
                  : "aspect-square mb-6"
              }
            />
          ))}
        </div>
        <div className="absolute flex items-center justify-center bg-gradient-to-b from-transparent to-white w-full h-64 bottom-0">
          <BaseButton>Show more</BaseButton>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
