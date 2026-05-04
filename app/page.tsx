import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Health from "@/components/sections/Health";
import Stockists from "@/components/sections/Stockists";
import Order from "@/components/sections/Order";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="gb-page">
      <Nav />
      <Hero />
      <About />
      <Process />
      <Products />
      <Health />
      <Stockists />
      <Order />
      <Footer />
    </div>
  );
}
