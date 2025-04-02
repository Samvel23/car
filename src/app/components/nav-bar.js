import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand fw-bold ${styles.brand}`} href="#">
          &#x1F697; Car Parts Store
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link fw-semibold ${styles.navLink}`} href="#">
                Home
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link fw-semibold ${styles.navLink}`} href="#">
                Shop
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link fw-semibold ${styles.navLink}`} href="#">
                About
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link className={`nav-link fw-semibold ${styles.navLink}`} href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

