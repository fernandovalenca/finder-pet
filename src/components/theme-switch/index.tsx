import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import { ButtonHTMLAttributes, forwardRef, useRef } from "react";

export const ThemeSwitch = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const player = useRef<Player>(null);

  const onLoad = (event: PlayerEvent) => {
    console.log(event, player.current);
    if (event === "instanceSaved" && player.current) {
      player.current.setPlayerSpeed(3);
      try {
        if (
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          player.current.setSeeker(0, false);

          document.documentElement.classList.add("dark");

          localStorage.setItem("theme", "dark");
        } else {
          
          player.current.setSeeker(133, false);

          document.documentElement.classList.remove("dark");

          localStorage.setItem("theme", "light");
        }
      } catch (error) {}
    }
  };

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      if (player.current) {
        player.current.setPlayerDirection(1);
        player.current.play();
      }
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      return;
    }
    if (player.current) {
      player.current.setPlayerDirection(-1);
      player.current.play();
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  return (
    <button ref={ref} onClick={toggleTheme} {...props}>
      <Player
        onEvent={(event) => onLoad(event)}
        ref={player}
        autoplay={false}
        loop={false}
        keepLastFrame={true}
        src="https://assets8.lottiefiles.com/packages/lf20_gjedw3tk.json"
      />
    </button>
  );
});
