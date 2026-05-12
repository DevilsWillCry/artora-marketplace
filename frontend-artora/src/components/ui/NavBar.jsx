import ArtoraIcon from "@/assets/icons/main-icon.svg";
import { useEffect, useState } from "react";
import MenuArray from "@/data/menu_navigation";
import UserIcon from "./UserIcon";
import NavLinks from "./NavLinks";
import MobileNavBar from "./MobileNavBar";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed flex items-center justify-between  w-full z-100 px-5  bg-cream transition-all duration-300 ${scrolled ? "py-3 shadow-2xl border-b-0" : "py-2  border-b"} border-terracotta`}
    >
      <div className="flex items-center justify-start gap-3">
        <img className="w-15" src={ArtoraIcon} alt="Artora Icon" />
        <h1 className="text-xl italic tracking-wider font-bold">Artora</h1>
      </div>

      {/* -- Menu PC-- */}
      <div className="max-md:hidden relative flex flex-row tracking-widest items-center justify-end gap-3">
        <NavLinks
          mobile={false}
          desktopActive="text-terracotta"
          inactive="text-ink-soft hover:text-terracotta"
          MenuArray={MenuArray}
        />
      </div>

      <div>
        <UserIcon
          className="transition-all duration-300  text-ink-soft hover:text-terracotta"
          size="sm"
        />
      </div>

      {/* -- Menu Mobile-- */}
      <MobileNavBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        MenuArray={MenuArray}
      />
    </section>
  );
}

export default NavBar;
