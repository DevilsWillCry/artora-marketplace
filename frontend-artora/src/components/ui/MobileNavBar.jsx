import NavLinks from "./NavLinks";
import menuIcon from "@/assets/icons/menu-icon.min.min.svg";
import closeIcon from "@/assets/icons/close-icon.min.svg";

function MobileNavBar({ isOpen, setIsOpen, MenuArray }) {
  return (
    <div className="hidden max-md:flex flex-row tracking-widest items-center justify-center gap-3">
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <img
          className="w-8 z-110"
          src={isOpen ? closeIcon : menuIcon}
          alt="Artora Icon"
        />
      </button>
      <header
        className={`absolute flex flex-col items-center justify-center z-100 top-0 left-1/2 -translate-x-1/2  w-full h-screen bg-black text-5xl gap-15 transition-all duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <NavLinks
          mobile={true}
          mobileActive="text-terracotta"
          inactive="text-ink-soft hover:text-terracotta"
          MenuArray={MenuArray}
          onClick={() => setIsOpen(false)}
        />
      </header>
    </div>
  );
}

export default MobileNavBar;
