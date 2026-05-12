import { useEffect, useState } from "react";
import MenuArray from "@/data/menu_navigation";
import UserIcon from "./UserIcon";
import MobileNavBar from "./MobileNavBar";
import NavLogoAndTitle from "./NavLogoAndTitle";
import DesktopNavBar from "./DesktopNavBar";
import { NavLink } from "react-router";

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
      {/*--- Logo  & Title --*/}
      <NavLogoAndTitle />

      {/* -- Menu PC-- */}
      <DesktopNavBar MenuArray={MenuArray} />

      <div>
        <NavLink to={`/profile/${localStorage.getItem("userId")}`} className="relative p-2">
          <UserIcon
            className="transition-all duration-300  text-ink-soft font-bold hover:text-terracotta h-7"
            size="sm"
          />
        </NavLink>
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
