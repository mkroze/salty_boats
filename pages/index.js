import Layout from "../components/Layout";
import HeroSection from "../components/indexComponents/HeroSection";
import Testimonials from "../components/indexComponents/Testimonials";
import Features from "../components/indexComponents/Features";
import Offers from "../components/indexComponents/Offers";

export default function Home() {
  return (
    <Layout title="Home Page">
      <HeroSection />
      <Testimonials />
      <Features />
      <Offers />
    </Layout>
  );
}
