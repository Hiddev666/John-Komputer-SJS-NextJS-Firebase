import Navbar from "../components/Navbar"

const HeroSection = () => {
    return (
        <div className="p-10 bg-[url(/background-hero.svg)] bg-center h-110">
            <Navbar />
            <div className="h-full flex justify-center items-center justify-center">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-center text-4xl md:text-5xl font-semibold text-white">Solusi Terpercara <br /> Untuk Perangkat Optimal Anda</h1>
                    <button className="text-base md:text-xl bg-blue-800 p-3 rounded-md text-white font-semibold w-full md:w-1/2 hover:bg-blue-700 cursor-pointer">Konsultasi Gratis Sekarang!</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
