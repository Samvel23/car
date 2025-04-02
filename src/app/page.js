"use client";

import { useEffect } from "react";
import { FaShoppingCart, FaCar, FaTools, FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Home.module.css";
import NavBar from "./components/nav-bar";

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(styles.fadeIn);
    return () => root.classList.remove(styles.fadeIn);
  }, []);

  return (
    <>
      <NavBar />
      <header className={styles.heroSection}>
        <div className="container text-center text-white">
          <h1 className={styles.heroTitle}>Find the Best Car Parts Here!</h1>
          <p className={styles.heroSubtitle}>Quality and reliability for your ride.</p>
          <a href="#" className="btn btn-dark btn-lg mt-3">
            <FaShoppingCart className="me-2" /> Shop Now
          </a>
        </div>
      </header>

      <section className="container my-5" style={{ backgroundColor: "White"}}>
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {[1, 2, 3, 4].map((product, index) => (
            <div key={index} className="col-md-3" style={{ marginBottom: "20px" }}>
              <div className={styles.productCard}>
                <FaCar className={styles.productIcon} />
                <img src={`/images/product${index + 1}.jpg`} alt="Product" className="img-fluid" />
                <h5 className="mt-3">Car Part {index + 1}</h5>
                <p className="text-muted">High-quality replacement part</p>
                <button className="btn btn-success">
                  <FaTools className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
