"use client";

import {
  FaPhone,
  FaInstagram,
  FaTelegram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Contact.module.css";
import NavBar from "../components/nav-bar";
import { useLanguage } from "../context/LanguageContext";
import { SiViber } from "react-icons/si";

export default function Contact() {
  const { lang } = useLanguage();
  const handleCopyPhoneNumber = (text) => {
    navigator.clipboard.writeText(text);
    alert(
      lang === "eng"
        ? "Phone number copied to clipboard"
        : lang === "ru"
        ? "Номер телефона скопирован в буфер обмена"
        : "հեռախոսահամրը պատճենված է"
    );
  };
  return (
    <div>
      <NavBar />
      <div className={`container ${styles.contactContainer}`}>
        {/* Social Media Links - Now on Top */}

        {/* Title & Description */}
        <h1 className={styles.title}>
          {lang === "eng"
            ? "Get in Touch"
            : lang === "ru"
            ? "Свяжитесь с нами"
            : "Կապվնվեք մեզ հետ"}
        </h1>
        <p className={styles.description}>
          {lang === "eng"
            ? "Reach out to us anytime through the following:"
            : lang === "ru"
            ? "Свяжитесь с нами в любое время по следующим контактам:"
            : "Կապվնվեք մեզ հետ ցանկացած ժամանակ հետևյալ կոնտակտներով:"}
        </p>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <p>
            <FaPhone className={styles.icon} />{" "}
            <span
              onClick={() => handleCopyPhoneNumber("+971 54 478 3056")}
              className={styles.phoneLink}
            >
              +971 54 478 3056
            </span>
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/ntp_auto_parts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/+971544783056"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="viber://chat?number=%2B971544783056"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiViber />
            </a>
            <a
              href="https://wa.me/971544783056"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
