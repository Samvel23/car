"use client";

import { useState } from "react";
import { FaShoppingCart, FaCar, FaTools } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Home.module.css";
import NavBar from "./components/nav-bar";
import pads from "./images/pads.png";
import light from "./images/light.png";
import wiping from "./images/wiping.png";
import air from "./images/air1.png";
import { useLanguage } from "./context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { lang } = useLanguage();
  const [currentVideo, setCurrentVideo] = useState(0);

  const carBrands = [
    { name: "Toyota", domain: "toyota.com" },
    { name: "BMW", domain: null },
    { name: "Mercedes-Benz", domain: "mercedes-benz.com" },
    { name: "Nissan", domain: "nissan-global.com" },
    { name: "Audi", domain: "audi.com" },
    { name: "Honda", domain: null },
    { name: "Kia", domain: "kia.com" },
    { name: "Hyundai", domain: "hyundai.com" },
    { name: "Mazda", domain: "mazda.com" },
    { name: "Volkswagen", domain: "volkswagen.com" },
    { name: "Renault", domain: "renaultgroup.com" },
    { name: "Peugeot", domain: "peugeot.com" },
    { name: "Fiat", domain: "fiat.com" },
    { name: "Land Rover", domain: "landrover.com" },
  ];

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
    <div className={styles.pageWrapper}>
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
              ? "We provide fast and secure delivery to all countries in the Commonwealth of Independent States (CIS)."
              : lang === "ru"
              ? "Мы осуществляем быструю и безопасную доставку во все страны СНГ."
              : "Մենք ապահովում ենք արագ և ապահով առաքում ԱՊՀ բոլոր երկրներ։"}
          </p>
          <h3 className={styles.heroSubtitle}>
            {lang === "eng"
              ? "Delivery Across CIS"
              : lang === "ru"
              ? "Доставка по всему СНГ"
              : "Առաքում ամբողջ ԱՊՀ տարածքում"}
          </h3>
          <div className={styles.carLogoRow}>
            {carBrands.map((brand, index) => {
              const imageName =
                brand.name.toLowerCase().replace(/\s+/g, "") + ".png";
              return (
                <img
                  key={index}
                  src={`/images/${imageName}`}
                  alt={brand.name}
                  width={63}
                  height={63}
                  className={styles.carLogo}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
              );
            })}
          </div>
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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className={styles.productCard}>
                <FaCar className={styles.productIcon} />
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className={styles.productImage}
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

      <section className="container my-5 text-center">
        <h2 className="mb-4">
          {lang === "eng"
            ? "Watch Our Videos"
            : lang === "ru"
            ? "Посмотрите наши видео"
            : "Դիտեք մեր տեսանյութերը"}
        </h2>
        <div className={styles.videoContainer}>
          <video
            key={currentVideo}
            width="100%"
            height="auto"
            muted
            playsInline
            autoPlay
            loop
            controlsList="nodownload nofullscreen noremoteplayback"
            className={styles.videoPlayer}
          >
            <source src={videoSources[currentVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.thumbnailContainer}>
            {videoSources.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`btn ${
                  currentVideo === index
                    ? "btn-success activeThumb"
                    : "btn-outline-secondary"
                } ${styles.thumbnailButton}`}
              >
                {lang === "eng"
                  ? `Video ${index + 1}`
                  : lang === "ru"
                  ? `Видео ${index + 1}`
                  : `Տեսանյութ ${index + 1}`}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
