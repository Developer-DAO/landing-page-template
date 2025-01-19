import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
  ];

  const isActive = (href: string) =>
    router.pathname === href ||
    (href !== "/" && router.pathname.startsWith(href));

  return (
    <nav className="bg-black text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-lg md:text-xl text-white hover:text-yellow-400 transition duration-300"
          >
            <div className="relative w-8 h-8 overflow-hidden rounded-full border-2 border-yellow-400 flex-shrink-0">
              <Image
                src="/images/website-template-logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="object-cover"
                priority
              />
            </div>
            <span className="truncate">{t("siteName")}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative transition duration-300 ease-in-out hover:text-yellow-400 group ${
                    isActive(item.href)
                      ? "text-yellow-400 font-semibold"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <Link
              href="/get-started"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold transition duration-300 hover:transform hover:scale-105"
            >
              {t("callToAction")}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div 
            data-testid="mobile-menu"
            className="md:hidden absolute left-0 right-0 bg-black border-t border-gray-800"
          >
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg transition duration-300 ${
                    isActive(item.href)
                      ? "text-yellow-400 bg-gray-900 font-semibold"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-gray-900"
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/get-started"
                  className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-2 rounded-lg font-semibold transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("callToAction")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  text,
  mobile = false,
  external = false,
  closeMenu,
}: {
  href: string;
  text: string;
  mobile?: boolean;
  external?: boolean;
  closeMenu?: () => void;
}) => {
  const router = useRouter();
  const isActive =
    router.pathname === href ||
    (href !== "/" && router.pathname.startsWith(href));
  const baseClasses = "transition duration-300 ease-in-out hover-underline";
  const mobileClasses = mobile ? "block py-2 px-4 hover:bg-gray-800" : "";
  const activeClasses = isActive
    ? "text-yellow-400 font-semibold"
    : "hover:text-yellow-300";

  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${mobileClasses} ${activeClasses}`}
        onClick={handleClick}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${mobileClasses} ${activeClasses}`}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default Navbar;
