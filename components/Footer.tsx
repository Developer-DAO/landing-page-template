import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left flex items-center">
          <Image
            src="/images/website-template-logo.png"
            alt="Website Template Logo"
            width={40}
            height={40}
            className="mr-2 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-white-400">
              {t("siteName")}
            </h2>
          </div>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
            <li>
              <Link
                href="/"
                className="hover-underline transition duration-300"
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover-underline transition duration-300"
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <a
                href="https://www.developerdao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline transition duration-300"
              >
                Developer DAO
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto mt-8 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          © {currentYear} {t("developerDaoFoundation")}.{" "}
          {t("allRightsReserved")}
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.youtube.com/@DeveloperDAO"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.x.com/developer_dao"
            aria-label="X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
