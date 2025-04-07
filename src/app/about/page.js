"use client";

import {
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaCheckCircle,
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
        {/* Hero Section */}
        <header className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            {lang === "eng"
              ? "About NTP Auto Parts"
              : lang === "ru"
              ? "О NTP Auto Parts"
              : "NTP Auto Parts-ի մասին"}
          </h1>
        </header>

        {/* Content Section */}
        <section className={`container ${styles.contentSection}`}>
          <div className="row">
            {/* Our Story */}
            <div className="col-md-6">
              <h2 className={styles.sectionTitle}>
                {lang === "eng"
                  ? "About Us"
                  : lang === "ru"
                  ? "О нас"
                  : "Մեր մասին"}
              </h2>
              <p className={`${styles.text} ${styles.cardFadeIn}`}>
                {lang === "eng"
                  ? "With over 10 years of experience, NTP Auto Parts has become a trusted name in the auto parts industry. We are known for reliability and quality. We proudly serve our customers with a wider selection of parts for more products and models than ever before. Whether you are doing a simple repair or a complete rebuild, you can trust NTP Auto Parts to provide quality parts at an affordable price."
                  : lang === "ru"
                  ? "Имея более чем 10-летний опыт работы, компания NTP Auto Parts стала надежным именем в отрасли автозапчастей. Мы известны своей надежностью и качеством. Мы с гордостью предлагаем нашим клиентам более широкий выбор запчастей для большего количества продуктов и моделей, чем когда-либо прежде. Независимо от того, выполняете ли вы простой ремонт или полную переборку, вы можете быть уверены, что NTP Auto Parts предоставит вам качественные детали по доступной цене."
                  : "Ավելի քան 10 տարվա փորձ ունեցող NTP Auto Parts-ը դարձել է վստահելի անուն ավտոպահեստամասերի արդյունաբերության մեջ: Հայտնի ենք հուսալիությամբ և որակով։ Մենք հպարտությամբ սպասարկում ենք մեր հաճախորդներին՝ ավելի շատ ապրանքների համար մասերի լայն ընտրանիով և մոդելներով, քան երբևէ: Անկախ նրանից, թե դուք անում եք պարզ վերանորոգում կամ ամբողջական վերակառուցում, կարող եք վստահել NTP Auto Parts-ին՝ որակով մաս հարմար գնով։"}
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="col-md-6">
              <h2 className={styles.sectionTitle}>
                {lang === "eng"
                  ? "Why Choose Us?"
                  : lang === "ru"
                  ? "Почему выбрать нас?"
                  : "Ինչու ընտրել մեզ?"}
              </h2>
              <ul className={`${styles.list} ${styles.cardSlideIn}`}>
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
      </div>
    </>
  );
}
