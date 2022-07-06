/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import store from "../store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ItemProvider } from "../Context/ItemState";
import "react-toastify/dist/ReactToastify.css";
import ProgressBar from "react-progressbar-on-scroll";
function MyApp({ Component, pageProps }) {
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
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </ItemProvider>
    </>
  );
}
export default MyApp;
