import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Adoption from '../components/Adoption';
import HowItWorks from '../components/HowItWorks';
import Trust from '../components/Trust';
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
                <Adoption />
                <HowItWorks />
                <Trust />
                <Reviews />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
