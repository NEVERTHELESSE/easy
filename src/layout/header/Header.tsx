import Logo from "./Logo";
import Navigation from "./navigation/Navigation";

export default function Header() {
  return (
    <header className="p-2 xl:p-5 fixed w-full flex justify-between z-50">
      <div className="flex  md:px-4 py-1 rounded-full w-full justify-between items-center">
        <Navigation />
        <Logo />
      </div>
    </header>
  );
}
