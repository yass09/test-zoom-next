import Head from "next/head";
import { ImageSelector } from "../../components/ImageSelector/ImageSelector";
import data from "../../../public/data/images.json";

export default function ImagesList({ imagesListOptions }) {
  return (
    <>
      <Head>
        <title>Select Image</title>
        <meta name="description" content="Image Zoomer image list page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="pageTitle">Select an image</h1>
      <ImageSelector imageListOptions={imagesListOptions} />
    </>
  );
}

export async function getStaticProps() {
  // const req = await fetch("http://127.0.0.1:3000/data/images.json");
  // const data = await req.json();

  // add placeholder option to select options
  data.unshift({
    label: "Select an image",
    selected: true,
    disabled: true,
  });

  return { props: { imagesListOptions: data } };
}
