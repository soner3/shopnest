import Logo from "@/ui/Logo";
import SidebarButton from "./SidebarButton";
import CartSidebarButton from "./CartSidebarButton";
import ToggleTheme from "./ToggleTheme";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between p-2 shadow-2xl backdrop-blur-md">
      <div className="flex items-center gap-5">
        <SidebarButton />
        <Logo />
      </div>
      <HeaderSearch />
      <div className="flex gap-5">
        <CartSidebarButton />
        <ToggleTheme />
      </div>
    </header>
  );
}
