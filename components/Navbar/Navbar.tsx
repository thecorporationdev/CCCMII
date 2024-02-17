import Logo from "./Logo";
import NavMenu from "./NavMenu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="flex gap-x-4 py-4 w-full items-center ContainerPadding  container">
      <Logo />
      <NavMenu />
    </header>
  );
};

export default Navbar;
