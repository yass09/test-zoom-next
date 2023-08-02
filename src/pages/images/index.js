import Head from "next/head";
import { ImageSelector } from "../../components/ImageSelector/ImageSelector";
import data from "../../../public/data/images.json";
import { getSlugFromImagePath } from "../../helpers/slug.helper";

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
  data.forEach((item) => {
    console.log("🚀 --------------------------------------------------🚀");
    console.log("🚀 ~ file: index.js:24 ~ data.forEach ~ item:", item);
    console.log("🚀 --------------------------------------------------🚀");

    console.log(
      "🚀 ------------------------------------------------------------------------------------------------------------🚀"
    );
    console.log(
      "🚀 ~ file: index.js:30 ~ getStaticProps ~ getSlugFromImagePath(item.value):",
      getSlugFromImagePath(item.value)
    );
    console.log(
      "🚀 ------------------------------------------------------------------------------------------------------------🚀"
    );
    // add placeholder option to select options
    data.unshift({
      label: "Select an image",
      value: "Select an image",
      selected: true,
      disabled: true,
    });
  });

  return { props: { imagesListOptions: data } };
}
