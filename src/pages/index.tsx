import { Button, Footer, Header, PhotoCard, SearchInput } from "@/components";
import { useShowMorePhotos } from "@/queries/photos";
import photoStore from "@/store/photo-store";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { photos, searchText, total, currentPage } = photoStore();
  const { dispatchFindPhoto } = useShowMorePhotos();

  const showMorePage = () => {
    dispatchFindPhoto({ query: searchText, page: currentPage + 1 });
  };

  function isMultipleOfThree(index: number): boolean {
    return index % 3 === 0;
  }
  return (
    <main
      className={`w-full min-h-screen flex flex-col lg:px-16 bg-neutral-50 ${inter.className}`}
    >
      <Header />
      <div className="w-full flex flex-col items-center justify-center relative px-4">
        <SearchInput />
        {!!photos.length && (
          <div className="w-full text-center text-stone-800 mb-16">
            <h2 className="font-bold text-3xl">{searchText}</h2>
            <span className="block text-base font-medium mt-4">
              {total}{" "}
              <span className="text-custom-gray-300">
                results found for this search
              </span>
            </span>
          </div>
        )}
        <div className="columns-1 md:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              data={photo}
              className={
                isMultipleOfThree(index)
                  ? "aspect-9/16 mb-6"
                  : "aspect-square mb-6"
              }
            />
          ))}
        </div>
        {!!photos.length && (
          <div className="absolute flex items-center justify-center bg-gradient-to-b from-transparent to-white w-full h-64 bottom-0">
            <Button
              onClick={showMorePage}
              className="max-w-xs md:max-w-xl lg:max-w-3xl py-7 rounded-lg text-white text-2xl font-semibold"
            >
              Show more
            </Button>
          </div>
        )}
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
