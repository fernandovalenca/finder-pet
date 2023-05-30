import { Anchor, Logo, SocialButton, Spinner, SignUpForm, AnchorLink } from "@/components";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { GetServerSideProps } from "next";
import { signIn, getSession } from "next-auth/react";

import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const router = useRouter();

  const previousRoute = () => router.back();

  return (
    <main className={`lg:grid lg:grid-cols-[3fr_2fr] ${inter.className}`}>
      <section className="h-screen w-full hidden lg:flex">
        <header className="absolute top-0 left-0 hidden lg:flex flex-col ml-20 mt-24 max-w-[496px] text-neutral-100">
          <h1 className="hidden lg:flex items-center justify-start gap-3 lg:visible">
            <Logo />
            <strong className="text-xl font-bold">Finder Pet</strong>
          </h1>
          <strong className="font-semibold text-6xl mt-10">
            18,313,224 <span className="text-primary">pets</span> for you
          </strong>
          <span className="font-normal text-xl mt-4">
            A variety of images of pets from around the world for you to find
            and love.
          </span>
        </header>

        <img
          loading="lazy"
          className="w-full h-full object-cover aspect-square"
          src="./assets/images/cover-image.png"
          alt="imagem da capa"
        />

        <span className="hidden absolute lg:flex items-center justify-center gap-2 bottom-0 left-0 ml-16 mb-10 font-normal text-base text-neutral-100">
          <Spinner />
          Photography by <span className="font-semibold">John Wick</span>
        </span>
      </section>
      <section className="relative h-screen w-full flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-xs flex flex-col items-center justify-center">
          <button onClick={previousRoute}>
            <ArrowLeftIcon className="absolute h-6 w-6 m-6 top-0 left-0 cursor-pointer" />
          </button>

          <div className="flex items-center justify-center gap-3 lg:hidden">
            <Logo />
            <strong className="text-xl font-bold text-stone-800">
              Finder Pet
            </strong>
          </div>

          <SignUpForm />

          <span className="w-full text-center font-normal text-xs mt-6 mb-10">
            By clicking the “Sign up” button, you agree to Finder Pet{" "}
            <Anchor>Terms of Service</Anchor> and confirm that you have read our
            <Anchor>Privacy Policy</Anchor>.
          </span>

          <div className="w-full max-w-xs flex justify-center items-center">
            <div className="w-full border-b border-neutral-300" />
            <span className="mx-2 text-neutral-300 font-semibold text-sm">
              OR
            </span>
            <div className="w-full border-b border-neutral-300" />
          </div>

          <div className="w-full flex flex-col gap-2 mt-8">
            <SocialButton logo="google" onClick={() => signIn("google")}>
              Continue with Google
            </SocialButton>
            <SocialButton logo="facebook" onClick={() => signIn("facebook")}>
              Continue with Facebook
            </SocialButton>
            <SocialButton logo="twitter" onClick={() => signIn("twitter")}>
              Continue with Twitter
            </SocialButton>
          </div>

          <span className="font-semibold text-xs mt-12 text-stone-800">
            Already a member? <AnchorLink href={"/login"} className="my-8">Sign In</AnchorLink>
          </span>
        </div>
      </section>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
