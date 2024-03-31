import { Link } from "@tanstack/react-router";
import SelectTheme from "./select-theme";
import ToggleLanguage from "./toggle-language";
import { generateNavigationItemsWithTranslation } from "../../constants/navigation";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t } = useTranslation();

  const NAVIGATION_ITEMS = generateNavigationItemsWithTranslation(t);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <NavigationMobile />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {NAVIGATION_ITEMS.map((item, index) => (
            <li key={index}>
              <Link to={item.href} from="/">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <ToggleLanguage />
        <SelectTheme className="w-40" />
      </div>
    </div>
  );
}

function NavigationMobile() {
  const { t } = useTranslation();

  const NAVIGATION_ITEMS = generateNavigationItemsWithTranslation(t);

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <NavigationLogo />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {NAVIGATION_ITEMS.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavigationLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  );
}

export default Navigation;
