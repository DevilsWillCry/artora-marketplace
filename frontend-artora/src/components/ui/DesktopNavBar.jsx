import NavLinks from "./NavLinks";

function DesktopNavBar({ MenuArray }) {
  return (  
    <div className="max-md:hidden relative flex flex-row tracking-widest items-center justify-end gap-8">
      <NavLinks
        mobile={false}
        desktopActive="relative text-terracotta after:absolute after:-bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-terracotta after:scale-x-100 after:origin-left after:translate-x-0 overflow-hidden hover:after:translate-x-0 after:transition-all duration-300"
        
        inactive="relative text-ink-soft hover:text-terracotta after:absolute after:-bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-terracotta after:scale-x-100 after:origin-left after:translate-x-full overflow-hidden hover:after:translate-x-0 after:transition-all duration-300"
        MenuArray={MenuArray}
      />
    </div>
  );
}

export default DesktopNavBar;
