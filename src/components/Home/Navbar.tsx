import { RedirectBtn } from "../ActionBtn/RedirectBtn";
import { Input } from "../ui/input";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 h-12 shadow  sticky z-10 top-0 bg-white">
      {/* Logo */}
      <a className="pb-2" href="/">
        <img src="logo.png" className="size-25" />
      </a>
     
    
      {/* Search bar */}
      <div>
        <Input placeholder="search movies..." />
      </div>

      {/* Sign In btn or Profile  */}
      <div>
        <RedirectBtn url="/login">Login</RedirectBtn>
      </div>
    </nav>
  );
};
