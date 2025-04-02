"use client";

import { useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min"); // Dynamically import Bootstrap JS
  }, []);

  return (
    <nav style={{ backgroundColor: "#b0e57c" }} className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" href="#">
          Car Parts Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

