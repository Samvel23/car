import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import styles from "../styles/NavBar.module.css";
import logo from "../images/logo.png";
import Image from "next/image";
export default function NavBar() {
  const { lang, setLang } = useLanguage();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      path: "/",
      label: lang === "eng" ? "Home" : lang === "ru" ? "Главная" : "Գլխավոր",
    },
    {
      path: "/shop",
      label: lang === "eng" ? "Shop" : lang === "ru" ? "Магазин" : "Խանութ",
    },
    {
      path: "/about",
      label: lang === "eng" ? "About" : lang === "ru" ? "О нас" : "Մեր մասին",
    },
    {
      path: "/contact",
      label:
        lang === "eng" ? "Contact" : lang === "ru" ? "Контакты" : "Կոնտակտներ",
    },
  ];

  const languages = [
    { code: "eng", label: "ENG" },
    { code: "ru", label: "RU" },
    { code: "arm", label: "ARM" },
  ];

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className="container">
        <Link className={`${styles.brand} navbar-brand`} href="/">
          <Image
            src={logo}
            alt="NTP Auto Parts Logo"
            width={225}
            height={120}
            className={styles.logo}
            priority
          />
        </Link>
        <div className="d-flex align-items-center gap-3">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="d-lg-none ms-2">Menu</span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <li key={link.path} className={`${styles.navItem} nav-item`}>
                <Link
                  className={`${styles.navLink} nav-link`}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`${styles.languageSwitch} d-flex gap-2`}>
            <button
              className={`${styles.languageBtn} btn btn-sm ${
                lang === "ru" ? "btn-success" : "btn-outline-dark"
              }`}
              onClick={() => {
                setLang("ru");
                setIsOpen(false);
              }}
            >
              RU
            </button>
            <button
              className={`${styles.languageBtn} btn btn-sm ${
                lang === "eng" ? "btn-success" : "btn-outline-dark"
              }`}
              onClick={() => {
                setLang("eng");
                setIsOpen(false);
              }}
            >
              ENG
            </button>
            <button
              className={`${styles.languageBtn} btn btn-sm ${
                lang === "arm" ? "btn-success" : "btn-outline-dark"
              }`}
              onClick={() => {
                setLang("arm");
                setIsOpen(false);
              }}
            >
              ARM
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
