"use client";

import {
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaCheckCircle,
  FaTruck,
  FaHandshake,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/About.module.css";
import NavBar from "../components/nav-bar";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  return (
    <>
      <NavBar />
      <div className={styles.aboutContainer}>
        <header className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            {lang === "eng"
              ? "About NTP Auto Parts"
              : lang === "ru"
              ? "О NTP Auto Parts"
              : "NTP Auto Parts-ի մասին"}
          </h1>
          <p className={styles.heroSubtitle}>
            {lang === "eng"
              ? "Reliable parts, trusted service."
              : lang === "ru"
              ? "Надежные детали, проверенный сервис."
              : "Վստահելի պահեստամասեր, փորձարկված ծառայություն։"}
          </p>
        </header>

        <section className={`container ${styles.contentSection}`}>
          <div className="row">
            <div className="col-md-6">
              <h2 className={styles.sectionTitle}>
                {lang === "eng"
                  ? "About Us"
                  : lang === "ru"
                  ? "О нас"
                  : "Մեր մասին"}
              </h2>
              <p className={styles.text}>
                {lang === "eng"
                  ? "With over 10 years of experience, NTP Auto Parts has become a trusted name in the auto parts industry. We offer a wide selection of parts for many car models, ensuring quality and affordability. Whether you're doing a quick fix or a full rebuild, we’ve got the right parts for you."
                  : lang === "ru"
                  ? "С более чем 10-летним опытом, NTP Auto Parts — это надежное имя в мире автозапчастей. Мы предлагаем широкий выбор деталей для различных моделей автомобилей, гарантируя качество и доступные цены."
                  : "Ավելի քան 10 տարվա փորձով՝ NTP Auto Parts-ը վստահելի անուն է ավտոպահեստամասերի ոլորտում։ Մենք առաջարկում ենք մասերի լայն ընտրանի տարբեր մեքենաների մոդելների համար՝ ապահովելով որակ և մատչելիություն։"}
              </p>
            </div>

            <div className="col-md-6">
              <h2 className={styles.sectionTitle}>
                {lang === "eng"
                  ? "Why Choose Us?"
                  : lang === "ru"
                  ? "Почему выбрать нас?"
                  : "Ինչու ընտրել մեզ?"}
              </h2>
              <ul className={styles.list}>
                <li>
                  <FaCheckCircle className={styles.checkIcon} />
                  {lang === "eng"
                    ? "Premium Quality"
                    : lang === "ru"
                    ? "Высокое качество"
                    : "Բարձր որակ"}
                </li>
                <li>
                  <FaCheckCircle className={styles.checkIcon} />
                  {lang === "eng"
                    ? "Affordable Prices"
                    : lang === "ru"
                    ? "Доступные цены"
                    : "Մատչելի գներ"}
                </li>
                <li>
                  <FaCheckCircle className={styles.checkIcon} />
                  {lang === "eng"
                    ? "Fast & Reliable Shipping"
                    : lang === "ru"
                    ? "Быстрая и надежная доставка"
                    : "Արագ ու վստահելի առաքում"}
                </li>
                <li>
                  <FaCheckCircle className={styles.checkIcon} />
                  {lang === "eng"
                    ? "Excellent Customer Support"
                    : lang === "ru"
                    ? "Отличная поддержка клиентов"
                    : "Գերազանց հաճախորդների աջակցություն"}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`container ${styles.highlightSection}`}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <FaTruck className={styles.highlightIcon} />
              <h3 className={styles.highlightTitle}>
                {lang === "eng"
                  ? "Delivery Across CIS"
                  : lang === "ru"
                  ? "Доставка по всему СНГ"
                  : "Առաքում ամբողջ ԱՊՀ տարածքում"}
              </h3>
              <p className={styles.text}>
                {lang === "eng"
                  ? "We provide fast and secure delivery to all countries in the Commonwealth of Independent States (CIS)."
                  : lang === "ru"
                  ? "Мы осуществляем быструю и безопасную доставку во все страны СНГ."
                  : "Մենք ապահովում ենք արագ և ապահով առաքում ԱՊՀ բոլոր երկրներ։"}
              </p>
            </div>
            <div className="col-md-6 text-center">
              <FaHandshake className={styles.highlightIcon} />
              <h3 className={styles.highlightTitle}>
                {lang === "eng"
                  ? "First-Hand Goods Only"
                  : lang === "ru"
                  ? "Только оригинальные товары"
                  : "Միայն բնօրինակ ապրանքներ"}
              </h3>
              <p className={styles.text}>
                {lang === "eng"
                  ? "All our parts come directly from verified manufacturers — no middlemen, no compromises."
                  : lang === "ru"
                  ? "Все наши запчасти поступают напрямую от проверенных производителей — без посредников и компромиссов."
                  : "Մեր բոլոր ապրանքները մատակարարվում են անմիջապես վստահելի արտադրողներից՝ առանց միջնորդների։"}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
