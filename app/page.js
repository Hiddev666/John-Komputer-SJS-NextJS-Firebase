import Image from "next/image";
import HeroSection from "./layouts/HeroSection";
import LayananSection from "./layouts/LayananSection";
import TestimoniSection from "./layouts/TestimoniSection";
import KonsultasiSection from "./layouts/KonsultasiSection";
import ContactSection from "./layouts/ContactSection";

export default function Home() {
    return (
        <div className="font-sans">
            <HeroSection />
            <LayananSection />
            <TestimoniSection />
            <KonsultasiSection />
            <ContactSection />
        </div>
    );
}
