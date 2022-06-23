import Head from "next/head";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Codeswear.com - Wear your logic</title>
        <meta name="description" content=""></meta>
        <meta name="keywords" content=""></meta>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </div>
  );
}
