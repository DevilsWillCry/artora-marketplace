import ArtoraIcon from "@/assets/icons/main-icon.svg";

function NavLogoAndTitle() {
  return (
    <div className="flex items-center justify-start gap-3">
      <img className="w-15" src={ArtoraIcon} alt="Artora Icon" />
      <h1 className="text-xl italic tracking-wider font-bold">Artora</h1>
    </div>
  );
}

export default NavLogoAndTitle;
