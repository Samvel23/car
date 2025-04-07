"use client";

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

export default function Home() {
  const { lang } = useLanguage();
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

      <section className="container my-5" style={{ backgroundColor: "White" }}>
        <h2 style={{ color: "black" }} className="text-center mb-4">
          {lang === "eng"
            ? "Featured Products"
            : lang === "ru"
            ? "Рекомендуемые продукты"
            : "Առաջարկվող ապրանքներ"}
        </h2>
        <div className="row" style={{ backgroundColor: "White" }}>
          {products.map((product, index) => (
            <div
              key={index}
              className="col-md-3"
              style={{ marginBottom: "20px" }}
            >
              <div
                className={styles.productCard}
                style={{ backgroundColor: "White" }}
              >
                <FaCar
                  className={styles.productIcon}
                  style={{ fontSize: "1.5rem" }}
                />
                <Image
                  src={product.image}
                  alt="Product"
                  className="img-fluid"
                  width={300}
                  height={300}
                />
                <h5 className="mt-3" style={{ color: "black" }}>
                  {product.name}
                </h5>
                <p className="text-muted">
                  {lang === "eng"
                    ? "High-quality replacement part"
                    : lang === "ru"
                    ? "Высококачественная запасная часть"
                    : "Բարձրորակ փոխարինող մաս"}
                </p>
                <Link className="btn btn-success" href="/shop">
                  <FaTools className="me-2" />{" "}
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
    </div>
  );
}
