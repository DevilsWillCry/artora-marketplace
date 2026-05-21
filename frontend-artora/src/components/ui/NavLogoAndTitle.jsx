import ArtoraIcon from "@/assets/icons/icon-pottery-main.svg";
import { useNavigate } from "react-router";

function NavLogoAndTitle() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };


  return (
    <div className="relative flex items-center justify-start gap-3 px-5 drop-shadow-lg cursor-pointer hover:scale-105 transition-all duration-300" onClick={handleClick}>
      <img className="w-12 bg-paper drop-shadow-lg p-2 rounded-full" src={ArtoraIcon} alt="Artora Icon" />
      <h1 className="text-xl italic tracking-wider text-terracotta ">Artora</h1>
    </div>
  );
}

export default NavLogoAndTitle;
