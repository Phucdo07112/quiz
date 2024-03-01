
import { Logo } from "./logo";
import { Actions } from "./actions";
import Music from "./music";

export const Navbar = () => {
  
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] px-2 lg:px-4 flex justify-between items-center">
      <Logo />
      <div className="flex items-center space-x-4">
        <Music />
        <Actions />
      </div>
    </nav>
  );
};
