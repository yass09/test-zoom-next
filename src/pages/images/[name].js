import Head from "next/head";
import { useRouter } from "next/router";
import { getSlugFromImagePath } from "../../helpers/slug.helper";
import data from "../../../public/data/images.json";

export default function Image({ imageData } = {}) {
  console.log("🚀 -----------------------------------------------------🚀");
  console.log("🚀 ~ file: [name].js:8 ~ Image ~ imageData:", imageData);
  console.log("🚀 -----------------------------------------------------🚀");

  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Head>
        <title>name</title>
        <meta name="description" content="Image Zoomer image page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {imageData && <div>{imageData}</div>}
      <div>Hello</div>
    </>
  );
}

export async function getStaticProps({ params }) {
  // const req = await fetch("http://localhost:3000/data/images.json");
  // const data = await req.json();
  const { name } = params;

  const imageData = data.filter((item) => item.value.includes(name));

  return { props: { imageData } };
}

export async function getStaticPaths() {
  // const req = await fetch("http://localhost:3000/data/images.json");
  // const data = await req.json();
  const paths = data.map((item) => ({
    params: {
      name: getSlugFromImagePath(item.value),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// export function getServerSideProps({ params }) {
//   const { name } = params;
//   const imageData = data.filter((item) => item.value.includes(name));
//   return imageData;
// }
