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
        <title>AimTech Solution - Build Fast. Deploy Smart. Grow with Us</title>
        <meta name="description" content="Expert in full-stack web development, cloud deployment, and SEO-optimized solutions. Build fast, deploy smart, and grow with AimTech." />
        <meta name="keywords" content="web development, full-stack development, cloud deployment, SEO optimization, AimTech, software solutions" />
        <meta name="author" content="AimTech Solution" />
        <meta property="og:title" content="AimTech Solution - Build Fast. Deploy Smart. Grow with Us" />
        <meta property="og:description" content="Expert in full-stack web development, cloud deployment, and SEO-optimized solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aimtechsolution.com" />
        <meta property="og:image" content="/hero-section.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AimTech Solution - Build Fast. Deploy Smart. Grow with Us" />
        <meta name="twitter:description" content="Expert in full-stack web development, cloud deployment, and SEO-optimized solutions." />
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
