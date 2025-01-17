import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/components/context/TranslationContext.js";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { selectedLanguage, translations, handleLanguageChange } = useTranslation();
  const pathUrl = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Manage direction attribute
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (selectedLanguage === "ps" || selectedLanguage === "fa") {
      htmlElement.setAttribute("dir", "rtl");
    } else {
      htmlElement.setAttribute("dir", "ltr");
    }
  }, [selectedLanguage]);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  useEffect(() => {
    const handleStickyNavbar = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const textClass = sticky
    ? "text-dark dark:text-white"
    : "text-white dark:text-dark";

  const buttonBgClass = sticky
    ? "bg-dark dark:bg-white"
    : "bg-white dark:bg-dark";

  return (
    <header
      className={`ud-header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link
              href="/"
              className={`navbar-logo block w-full ${sticky ? "py-2" : "py-5"}`}
            >
              <Image
                src={`${
                  sticky
                    ? "/images/logo/logo.svg" // Sticky logo
                    : "/images/logo/logo-white.svg" // Transparent logo
                }`}
                alt="logo"
                width={140}
                height={30}
                className={`header-logo w-full ${textClass}`}
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${buttonBgClass}`}
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? " top-[7px] rotate-45" : ""
                  } ${buttonBgClass}`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? "opacity-0" : ""
                  } ${buttonBgClass}`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? " top-[-8px] -rotate-45" : ""
                  } ${buttonBgClass}`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                  {Object.entries(translations.menu).map(([key, value], index) => (
                    <li key={index} className="group relative">
                      <Link
                        href={`/${key === "home" ? "" : key}`}
                        className={`ud-menu-scroll flex py-2 text-base group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${textClass}`}
                      >
                        {value}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
              {/* Language Selection */}
              <select
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="ml-4 bg-transparent border-none text-body-color dark:text-white focus:outline-none"
              >
                <option value="en">
                  {translations.language?.english || "English"}
                </option>
                <option value="ps">
                  {translations.language?.pashto || "Pashto"}
                </option>
                <option value="fa">
                  {translations.language?.persian || "Persian"}
                </option>
              </select>

              {/* Theme Toggle */}
              <button
                aria-label="theme toggler"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-4 flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white"
              >
                <span>
                  <svg
                    className="hidden h-[22px] w-[22px] fill-current dark:block"
                    viewBox="0 0 16 16"
                  >
                    <path d="..." />
                  </svg>
                  <svg
                    className="h-[22px] w-[22px] fill-current dark:hidden"
                    viewBox="0 0 16 16"
                  >
                    <path d="..." />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
