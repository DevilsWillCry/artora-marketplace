import { NavLink } from "react-router";

function NavLinks({
  mobile = false,
  onClick,
  mobileActive,
  desktopActive,
  inactive,
  MenuArray,
}) {
  return MenuArray.map((item, index) => (
    <NavLink
      key={index}
      to={item.href}
      onClick={onClick}
      className={({ isActive }) =>
        isActive ? (mobile ? mobileActive : desktopActive) : inactive
      }
    >
      {item.name}
    </NavLink>
  ));
}

export default NavLinks;
