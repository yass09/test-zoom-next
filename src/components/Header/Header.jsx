import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <Navbar />
  </header>
);
