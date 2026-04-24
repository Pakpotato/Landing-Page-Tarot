import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Services from "./sections/Services"
import TikTok from "./sections/TikTok"
import Testimonials from "./sections/Testimonials"
import Products from "./sections/Products"
import CTA from "./sections/CTA"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TikTok />
        <Testimonials />
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  )
}