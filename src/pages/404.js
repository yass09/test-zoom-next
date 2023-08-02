import Link from "next/link";
import styles from "@/styles/Home.module.scss";

export default function Error() {
  return (
    <>
      <h1 className="pageTitle">Oops, something went wrong !</h1>
      <Link href="/" className={styles.homeNavigationBtn}>
        <h2>
          Return to Home <span>-&gt;</span>
        </h2>
      </Link>
    </>
  );
}
