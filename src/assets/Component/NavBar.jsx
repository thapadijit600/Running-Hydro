
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaBolt,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
    setDesktopAboutOpen(false);
  }, [location.pathname, location.hash]);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  const closeDesktopDropdown = () => {
    setDesktopAboutOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-semibold transition-colors duration-200 ${
      isActive
        ? "text-[#F59E0B]"
        : "text-[#1B365D] hover:text-[#F59E0B]"
    }`;

  const aboutLinks = [
    {
      title: "Company Overview",
      path: "/about#company-overview",
    },
    {
      title: "Board of Directors & Leadership",
      path: "/about#board-leadership",
    },
  ];

  const mobileLinks = [
    ["Projects", "/projects"],
    ["Group Company", "/group-company"],
    ["Notices", "/notices"],
    ["Events", "/events"],
    ["Gallery", "/gallery"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">

      {/* MAIN NAVBAR */}
      <div className="mx-auto flex h-[89px] max-w-[1440px] items-center justify-between px-5 lg:px-10">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => {
            closeMobileMenu();
            closeDesktopDropdown();
          }}
          className="flex shrink-0 items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B365D] text-xl text-[#F59E0B] shadow-sm transition duration-300 hover:bg-[#F59E0B] hover:text-[#1B365D]">
            <FaBolt />
          </div>

          <div>
            <h1 className="text-xl font-extrabold leading-tight tracking-wide text-[#1B365D] sm:text-2xl">
              DEVDHUNGA
            </h1>

            <p className="text-[10px] font-bold tracking-[4px] text-[#475569]">
              HYDRO
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">

          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          {/* ABOUT US DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopAboutOpen(true)}
            onMouseLeave={() => setDesktopAboutOpen(false)}
            onFocus={() => setDesktopAboutOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setDesktopAboutOpen(false);
              }
            }}
          >
            <NavLink
              to="/about"
              onClick={closeDesktopDropdown}
              aria-haspopup="true"
              aria-expanded={desktopAboutOpen}
              className={({ isActive }) =>
                `flex items-center gap-2 py-7 text-sm font-semibold transition-colors duration-200 ${
                  isActive || desktopAboutOpen
                    ? "text-[#F59E0B]"
                    : "text-[#1B365D] hover:text-[#F59E0B]"
                }`
              }
            >
              About Us

              <FaChevronDown
                className={`text-[10px] transition-transform duration-300 ${
                  desktopAboutOpen ? "rotate-180" : ""
                }`}
              />
            </NavLink>

            {/* DROPDOWN MENU */}
            <div
              className={`
                absolute left-0 top-full z-50 w-[300px]
                overflow-hidden rounded-xl
                border border-slate-200
                border-t-[3px] border-t-[#F59E0B]
                bg-white py-2
                shadow-[0_12px_35px_rgba(15,23,42,0.15)]
                transition-all duration-200 ease-out
                ${
                  desktopAboutOpen
                    ? "visible pointer-events-auto translate-y-0 opacity-100"
                    : "invisible pointer-events-none translate-y-2 opacity-0"
                }
              `}
            >
              {aboutLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeDesktopDropdown}
                  className="
                    block px-6 py-4
                    text-sm font-medium
                    text-[#1B365D]
                    transition-all duration-200
                    hover:bg-[#F1F5F9]
                    hover:pl-8
                    hover:text-[#F59E0B]
                  "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/group-company" className={navLinkClass}>
            Group Company
          </NavLink>

          <NavLink to="/notices" className={navLinkClass}>
            Notices
          </NavLink>

          <NavLink to="/events" className={navLinkClass}>
            Events
          </NavLink>

          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>

        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="
              flex items-center gap-2 rounded-lg
              bg-[#F59E0B] px-5 py-3
              text-sm font-bold text-[#0F172A]
              shadow-sm
              transition duration-300
              hover:bg-[#1B365D] hover:text-white
            "
          >
            Contact Us
            <span className="text-base">→</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg border border-slate-200
            text-xl text-[#1B365D]
            transition duration-200
            hover:border-[#F59E0B]
            hover:bg-[#F8FAFC]
            lg:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`
          overflow-hidden border-t border-slate-200 bg-white
          transition-all duration-300 ease-in-out lg:hidden
          ${
            menuOpen
              ? "max-h-[850px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <nav className="mx-auto flex max-w-[1440px] flex-col px-5 py-4">

          {/* HOME */}
          <NavLink
            to="/"
            end
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              `border-b border-slate-100 py-3 text-sm font-semibold transition ${
                isActive
                  ? "text-[#F59E0B]"
                  : "text-[#1B365D] hover:text-[#F59E0B]"
              }`
            }
          >
            Home
          </NavLink>

          {/* MOBILE ABOUT US */}
          <div className="border-b border-slate-100">

            <div className="flex items-center justify-between">

              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="py-3 text-sm font-semibold text-[#1B365D] transition hover:text-[#F59E0B]"
              >
                About Us
              </Link>

              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="rounded-md p-3 text-sm text-[#1B365D] transition hover:bg-slate-50 hover:text-[#F59E0B]"
                aria-label="Toggle About Us submenu"
                aria-expanded={aboutOpen}
              >
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

            </div>

            {aboutOpen && (
              <div className="mb-3 ml-3 overflow-hidden rounded-lg border-l-[3px] border-[#F59E0B] bg-[#F8FAFC] pl-3">

                {aboutLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className="
                      block px-3 py-3
                      text-sm font-medium
                      text-[#475569]
                      transition hover:text-[#F59E0B]
                    "
                  >
                    {item.title}
                  </Link>
                ))}

              </div>
            )}

          </div>

          {/* OTHER NAVIGATION LINKS */}
          {mobileLinks.map(([title, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `border-b border-slate-100 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "text-[#F59E0B]"
                    : "text-[#1B365D] hover:text-[#F59E0B]"
                }`
              }
            >
              {title}
            </NavLink>
          ))}

          {/* MOBILE CONTACT LINK */}
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="
              mt-5 flex items-center justify-center gap-2
              rounded-lg bg-[#F59E0B] px-5 py-3
              text-sm font-bold text-[#0F172A]
              transition duration-300
              hover:bg-[#1B365D] hover:text-white
            "
          >
            Contact Us
            <span className="text-base">→</span>
          </Link>

        </nav>
      </div>

    </header>
  );
};

export default Navbar;
