import Head from "next/head";
import { useRouter } from "next/router";
import { getSlugFromImagePath } from "../../helpers/slug.helper";
import data from "../../../public/data/images.json";
import { ImageViewer } from "../../components/ImageViewer/ImageViewer";

export default function Image({ imageData } = null) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Image Zoomer image page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {imageData && <div>{JSON.stringify(imageData)}</div>}
      <ImageViewer imageData={imageData} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const { name } = params;

  const imageData = data.filter((item) => item.value.includes(name))[0];

  return { props: { imageData } };
}

export async function getStaticPaths() {
  const paths = data.map((item) => {
    return {
      params: {
        name: getSlugFromImagePath(item.value),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
