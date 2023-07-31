import "@/styles/globals.scss";
import { RootLayout } from "../components/layouts";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
