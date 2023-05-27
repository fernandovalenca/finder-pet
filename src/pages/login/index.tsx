import Anchor from "@/components/anchor";
import Button from "@/components/button";
import Input from "@/components/input";
import Logo from "@/components/logo";
import SocialButton from "@/components/social-button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <main
      className={`h-screen w-screen flex items-center justify-center ${inter.className}`}
    >
      <section></section>
      <section className="relative flex-1 h-full flex flex-col items-center justify-center">
        <div className="w-full max-w-xs flex flex-col items-center justify-center">
          <ArrowLeftIcon className="absolute h-6 w-6 m-6 top-0 left-0 cursor-pointer" />
          <form className="w-full flex flex-col items-center justify-center">
            <header className="w-full flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-3">
                <Logo />
                <strong className="text-xl font-bold text-stone-800">Finder Pet</strong>
              </div>
              <h2 className="font-semibold text-xl mt-14 text-stone-800">Sign in</h2>
            </header>
            <div className="w-full flex flex-col gap-4 my-10">
              <Input title="Username or Email" name="username" type="text" />
              <Input title="Password" name="password" type="password" />
            </div>
            <Button>Sign in</Button>
          </form>
          <Anchor className="my-8">Forgot your password?</Anchor>
          <div className="w-full max-w-xs flex justify-center items-center">
            <div className="w-full border-b border-neutral-300" />
            <span className="mx-2 text-neutral-300 font-semibold text-sm">
              OR
            </span>
            <div className="w-full border-b border-neutral-300" />
          </div>
          <div className="w-full flex flex-col gap-2 mt-8">
            <SocialButton logo="google">Continue with Google</SocialButton>
            <SocialButton logo="facebook">Continue with Facebook</SocialButton>
            <SocialButton logo="twitter">Continue with Twitter</SocialButton>
          </div>
          <span className="font-semibold text-xs mt-12 text-stone-800">
            Not a member? <Anchor className="my-8">Sign up now</Anchor>
          </span>
        </div>
      </section>
    </main>
  );
}
