import Image from "next/image";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "app/core";

export default function Oricaswap() {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <Image
      width="30"
      height="30"
      className={darkMode ? "filter invert" : ""}
      src="/logo.png"
    />
  );
}
