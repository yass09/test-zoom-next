import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Image Zoomer</title>
        <meta name="description" content="Image Zoomer next app home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeContentContainer}>
        <div className={styles.homeTitleContainer}>
          <Image
            className={styles.logo}
            src="/images/icons8-zoom-in-52.webp"
            alt="Image Zooming Logo"
            width={52}
            height={52}
            priority
            quality={100}
          />
          <h1 className="pageTitle">Image Zoomer</h1>
        </div>
        <div className={styles.homeSubtitleContainer}>
          <span>By </span>
          <Image
            className={styles.logo}
            src="/reezocar.webp"
            alt="Reezocar Logo"
            width={130}
            height={32}
            priority
            quality={100}
          />
        </div>
        <Link href="/images" className={styles.homeNavigationBtn}>
          <h2>
            Start Viewing Images <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </>
  );
}
