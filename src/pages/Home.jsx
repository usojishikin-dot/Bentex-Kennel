import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Trust from '../components/Trust';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import Gallery from '../components/Gallery';
import Adoption from '../components/Adoption';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Trust />
                <Pricing />
                <HowItWorks />
                <Gallery />
                <Adoption />
                <Reviews />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
