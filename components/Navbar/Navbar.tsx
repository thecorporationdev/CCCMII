"use client";
import Navigation from "@/components/Navbar/NavigationMenu";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Reveal from "@/Animations/Reveal";

type Props = {};

const Navbar = (props: Props) => {
  const [bar, setbar] = useState<boolean>(false);

  return (
    <>
      <AnimatePresence>
        {bar && <Navigation hideModalHandler={setbar} barstate={bar} />}
      </AnimatePresence>

      <header className="flex gap-x-4 py-4 w-full items-center ContainerPadding container max-lg:px-4">
        <Logo />
        <NavMenu bar={bar} barfunction={setbar} />
      </header>
    </>
  );
};

export default Navbar;
