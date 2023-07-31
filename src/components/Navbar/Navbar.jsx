import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/images", label: "Images" },
];

export const Navbar = () => {
  const router = useRouter();
  const { asPath } = router;
  console.log(asPath);
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar_link_list}>
        {navLinks.map(({ path, label }) => (
          <li
            className={`${styles.navbar_link_listitem} ${
              asPath === path ? styles.active : ""
            }`}
            key={path}
          >
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
