/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import store from "../store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ItemProvider } from "../Context/ItemState";
import LoadingBar from "react-top-loading-bar";
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "react-progressbar-on-scroll";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  });
  return (
    <>
      <ItemProvider>
        <Provider store={store}>
          <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ProgressBar
            color="#cc0000"
            gradient={true}
            colorGradient="yellow"
            height={5}
          />
          <LoadingBar
            color="#7f1d1d"
            progress={progress}
            waitingTime={400}
            height={5}
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </ItemProvider>
    </>
  );
}
export default MyApp;
