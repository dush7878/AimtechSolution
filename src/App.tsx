import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import Projects from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServicesPage } from './components/ServicesPage';
import { Toaster } from './components/ui/sonner';

import { Helmet } from 'react-helmet-async';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>AimTech Solution - Expert Web Development & SEO Services</title>
        <meta name="description" content="AimTech Solution: Leading provider of full-stack web development, cloud deployment, and SEO-optimized solutions. Build fast, deploy smart, and grow with AimTech." />
        <meta name="keywords" content="AimTech Solution, web development, full-stack development, cloud deployment, SEO optimization, software solutions, AimTech" />
        <meta name="author" content="AimTech Solution" />
        <meta property="og:title" content="AimTech Solution - Expert Web Development & SEO Services" />
        <meta property="og:description" content="AimTech Solution: Leading provider of full-stack web development, cloud deployment, and SEO-optimized solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aimtechsolution.vercel.app" />
        <meta property="og:image" content="/hero-section.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AimTech Solution - Expert Web Development & SEO Services" />
        <meta name="twitter:description" content="AimTech Solution: Leading provider of full-stack web development, cloud deployment, and SEO-optimized solutions." />
        <meta name="twitter:image" content="/hero-section.png" />
      </Helmet>
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </HelmetProvider>
  );
}
