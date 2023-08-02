import Link from "next/link";
import styles from "./BackButton.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const BackButton = ({ path }) => {
  return (
    <Link className={styles.backNavigationBtn} href={path}>
      <span>-&gt;</span>
      <h2>Back</h2>
    </Link>
  );
};
