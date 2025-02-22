import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <section id="home">
          <Hero />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="services">
          <Services />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="portfolio">
          <Portfolio />
        </section>
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense> */}





    </div>



  );
};

export default App;
