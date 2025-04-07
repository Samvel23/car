"use client";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Shop.module.css";
import NavBar from "../components/nav-bar";
import Image from "next/image";
import Link from "next/link";

// Import images
import bumper from "../images/bumper.png";
import pads from "../images/pads.png";
import light from "../images/light.png";
import air from "../images/air1.png";
import battery from "../images/battery.png";
import plugs from "../images/plugs.png";
import hood from "../images/hood.png";
import wiping from "../images/wiping.png";
import { useLanguage } from "../context/LanguageContext";

export default function Shop() {
  const { lang } = useLanguage();
  const products = [
    {
      id: 1,
      name:
        lang === "eng"
          ? "Car Bumper"
          : lang === "ru"
          ? "Бампер автомобиля"
          : "Ավտոմեքենայի բամպեր",
      image: bumper,
    },
    {
      id: 2,
      name:
        lang === "eng"
          ? "Brake Pads"
          : lang === "ru"
          ? "Тормозные колодки"
          : "Արգելակի բարձիկներ",
      image: pads,
    },
    {
      id: 3,
      name:
        lang === "eng" ? "Headlights" : lang === "ru" ? "Фары" : "Լուսարձակներ",
      image: light,
    },
    {
      id: 4,
      name:
        lang === "eng"
          ? "Air Filter"
          : lang === "ru"
          ? "Воздушный фильтр"
          : "Օդի զտիչ",
      image: air,
    },
    {
      id: 5,
      name:
        lang === "eng" ? "Battery" : lang === "ru" ? "Аккумулятор" : "Մարտկոց",
      image: battery,
    },
    {
      id: 6,
      name:
        lang === "eng"
          ? "Spark PLugs"
          : lang === "ru"
          ? "Свечи зажигания"
          : "Կայծային մոմեր(Սվեչի)",
      image: plugs,
    },
    {
      id: 7,
      name:
        lang === "eng"
          ? "Car Hood"
          : lang === "ru"
          ? "Капот автомобиля"
          : "Մեքենայի գլխարկ",
      image: hood,
    },
    {
      id: 8,
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
    <>
      <NavBar />
      <div className={`container-fluid ${styles.shopContainer}`}>
        <div className="row justify-content-center g-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300} // Increased width
                    height={200} // Reduced height
                    className={styles.productImage}
                    priority={product.id <= 4}
                  />
                </div>
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>{product.name}</h5>
                  <Link href="/contact" className={styles.contactButton}>
                    <FaPhone /> {lang === "eng" ? "Contact Us" : lang === "ru" ? "Свяжитесь с нами" : "Կապնվեք մեզ հետ"}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
