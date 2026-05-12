import NavLinks from "./NavLinks";

function DesktopNavBar({ MenuArray }) {
  return (  
    <div className="max-md:hidden relative flex flex-row tracking-widest items-center justify-end gap-3">
      <NavLinks
        mobile={false}
        desktopActive="text-terracotta"
        inactive="text-ink-soft hover:text-terracotta"
        MenuArray={MenuArray}
      />
    </div>
  );
}

export default DesktopNavBar;
