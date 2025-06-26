import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/global.css";
import "../styles/style.css";
import "../styles/prism.css";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.MathJax?.typesetPromise) {
        window.MathJax.typesetPromise().catch((err) =>
          console.error("MathJax render error:", err)
        );
      }
    };

    // Trigger on route change
    router.events.on("routeChangeComplete", handleRouteChange);

    // Optional: trigger once on first load
    handleRouteChange();

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <PlausibleProvider domain="mindstone.tuancao.me">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
