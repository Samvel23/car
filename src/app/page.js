"use client";

import { FaShoppingCart, FaCar, FaTools } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "./styles/Home.module.css";
import NavBar from "./components/nav-bar";

export default function Home() {
  return (
    <>
      <NavBar />
      <header className={styles.heroSection}>
        <div className="container text-center text-white">
          <h1 className={styles.heroTitle}>Find the Best Car Parts Here!</h1>
          <p className={styles.heroSubtitle}>
            Quality and reliability for your ride.
          </p>
          <a href="#" className="btn btn-dark btn-lg mt-3">
            <FaShoppingCart className="me-2" /> Shop Now
          </a>
        </div>
      </header>

      <section className="container my-5" style={{ backgroundColor: "White" }}>
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {[1, 2, 3, 4].map((product, index) => (
            <div
              key={index}
              className="col-md-3"
              style={{ marginBottom: "20px" }}
            >
              <div className={styles.productCard}>
                <FaCar className={styles.productIcon} />
                <Image
                  src={`/images/product${index + 1}.jpg`}
                  alt="Product"
                  className="img-fluid"
                  width={300}
                  height={300}
                />
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

