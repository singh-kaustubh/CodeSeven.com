import Head from "next/head";
import Content from "../Components/Content";
import Blog from "../Components/Blog";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";
import Carousel from "../Components/Carousel";
export default function Home() {
  return (
    <div>
      <Head>
        <title>CodeSeven.com - Wear your logic</title>
        <meta name="description" content=""></meta>
        <meta name="keywords" content=""></meta>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Carousel />
      <Content />
      <Blog />
      <Features />
      <Testimonials />
    </div>
  );
}
