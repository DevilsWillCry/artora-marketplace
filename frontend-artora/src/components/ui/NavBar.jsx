import { useEffect, useState } from "react";
import { navigation } from "@/data/LinksList";
import UserIcon from "./UserIcon";
import MobileNavBar from "./MobileNavBar";
import NavLogoAndTitle from "./NavLogoAndTitle";
import DesktopNavBar from "./DesktopNavBar";
import { NavLink } from "react-router";
import useAuth from "@/hooks/useAuth";
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useAuth();

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
      className={`fixed flex items-center justify-between w-full z-100 px-5  bg-cream transition-all duration-300 border-b border-black ${scrolled ? "shadow-md" : ""} `}
    >
      {/*--- Logo  & Title --*/}
      <NavLogoAndTitle />

      {/* -- Menu PC-- */}
      <DesktopNavBar MenuArray={navigation} /> 

      <div>
        <NavLink to={`/profile/${user?.id}`} className="relative p-2">
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
        MenuArray={navigation}
      />
    </section>
  );
}

export default NavBar;
