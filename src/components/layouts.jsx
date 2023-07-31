import { Header } from "./Header/Header";
import { Navbar } from "./Navbar/Navbar";
import { Inter } from "next/font/google";
import styles from "../styles/Layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export function RootLayout({ children }) {
  return (
    <div className={`${inter.className} ${styles.pageContainer}`}>
      <Header />
      <main className={styles.main}>
        <div className={styles.contentContainer}>{children}</div>
      </main>
    </div>
  );
}
