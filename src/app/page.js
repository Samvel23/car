"use client";

import { useState } from "react";
import { FaShoppingCart, FaCar, FaTools } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./styles/Home.module.css";
import NavBar from "./components/nav-bar";
import pads from "./images/pads.png";
import light from "./images/light.png";
import wiping from "./images/wiping.png";
import air from "./images/air1.png";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import { SiAudi, SiBmw, SiFord, SiMercedes, SiToyota } from "react-icons/si";

export default function Home() {
  const { lang } = useLanguage();
  const [currentVideo, setCurrentVideo] = useState(0);

  const products = [
    {
      id: 1,
      name:
        lang === "eng"
          ? "Brake Pads"
          : lang === "ru"
          ? "Тормозные колодки"
          : "Արգելակի բարձիկներ",
      image: pads,
    },
    {
      id: 2,
      name:
        lang === "eng" ? "Headlights" : lang === "ru" ? "Фары" : "Լուսարձակներ",
      image: light,
    },
    {
      id: 3,
      name:
        lang === "eng"
          ? "Air Filter"
          : lang === "ru"
          ? "Воздушный фильтр"
          : "Օդի զտիչ",
      image: air,
    },
    {
      id: 4,
      name:
        lang === "eng"
          ? "Wiper Blades"
          : lang === "ru"
          ? "Щетки стеклоочистителя"
          : "Ապակու մաքրիչի շեղբեր",
      image: wiping,
    },
  ];

  const videoSources = [
    "/videos/1.mp4",
    "/videos/2.mp4",
    "/videos/3.mp4",
    "/videos/4.mp4",
    "/videos/5.mp4",
    "/videos/6.mp4",
  ];

  return (
    <div style={{ backgroundColor: "White", minHeight: "100vh" }}>
      <NavBar />
      <header className={styles.heroSection}>
        <div className="container text-center text-white">
          <h1 className={styles.heroTitle}>
            {lang === "eng"
              ? "Find the Best Car Parts Here!"
              : lang === "ru"
              ? "Найдите лучшие автозапчасти здесь!"
              : "Գտեք լավագույն ավտոպահեստամասերը այստեղ!"}
          </h1>
          <p className={styles.heroSubtitle}>
            {lang === "eng"
              ? "Quality and reliability for your ride."
              : lang === "ru"
              ? "Качество и надежность для вашего автомобиля."
              : "Որակ և հուսալիություն ձեր ճանապարհորդության համար!"}
          </p>

          {/* Car Logos */}
          <div className={styles.carLogoRow}>
            <SiToyota className={styles.carLogo} />
            <SiBmw className={styles.carLogo} />
            <SiMercedes className={styles.carLogo} />
            <SiAudi className={styles.carLogo} />
            <SiFord className={styles.carLogo} />
          </div>
          <a href="/shop" className="btn btn-dark btn-lg mt-3">
            <FaShoppingCart className="me-2" />{" "}
            {lang === "eng"
              ? "Shop Now"
              : lang === "ru"
              ? "Купить сейчас"
              : "Գնեք հիմա"}
          </a>
        </div>
      </header>

      <section className="container my-5">
        <h2 className="text-center mb-4">
          {lang === "eng"
            ? "Featured Products"
            : lang === "ru"
            ? "Рекомендуемые продукты"
            : "Առաջարկվող ապրանքներ"}
        </h2>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className={styles.productCard}>
                <FaCar className={styles.productIcon} />
                <Image
                  src={product.image}
                  alt="Product"
                  width={300}
                  height={300}
                />
                <h5 className="mt-3">{product.name}</h5>
                <p className="text-muted">
                  {lang === "eng"
                    ? "High-quality replacement part"
                    : lang === "ru"
                    ? "Высококачественная запасная часть"
                    : "Բարձրորակ փոխարինող մաս"}
                </p>
                <Link className="btn btn-success" href="/shop">
                  <FaTools className="me-2" />
                  {lang === "eng"
                    ? "Go to Shop"
                    : lang === "ru"
                    ? "Перейти в магазин"
                    : "Գնացեք խանութ"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎥 VIDEO SECTION */}
      <section className="container my-5 text-center">
        <h2 className="mb-4">
          {lang === "eng"
            ? "Watch Our Videos"
            : lang === "ru"
            ? "Посмотрите наши видео"
            : "Դիտեք մեր տեսանյութերը"}
        </h2>
        <div>
          <video
            key={currentVideo}
            width="100%"
            height="auto"
            muted
            playsInline
            autoPlay
            loop
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{
              borderRadius: "12px",
              maxWidth: "800px",
              pointerEvents: "none",
            }}
          >
            <source src={videoSources[currentVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="d-flex justify-content-center mt-3 flex-wrap gap-2">
          {videoSources.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideo(index)}
              className={`btn ${
                currentVideo === index ? "btn-success" : "btn-outline-secondary"
              }`}
            >
              {lang === "eng"
                ? `Video ${index + 1}`
                : lang === "ru"
                ? `Видео ${index + 1}`
                : `Տեսանյութ ${index + 1}`}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
