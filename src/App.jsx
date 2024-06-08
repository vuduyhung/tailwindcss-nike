import { useState, useEffect } from "react";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subcribe,
  SuperQuality,
} from "./sections";

import Nav from "./components/Nav";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subcribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>

      <button
        className={`fixed bottom-5 right-5 p-3 rounded-full bg-black text-white 
        ${showScroll ? "block" : "hidden"}`}
        onClick={scrollTop}
      >
        ↑
      </button>
    </main>
  );
};

export default App;
