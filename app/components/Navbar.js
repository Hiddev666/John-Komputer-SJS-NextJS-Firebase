import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center">
            <Image
                width={180}
                height={100}
                src={"/logo.svg"}
                alt="Logo"
            />
            <div className="text-white hidden md:flex gap-7">
                <Link href={"#layanan"}>
                    <p className="transition-all duration-300 ease-in-out hover:text-xl">Layanan</p>
                </Link>
                <Link href={"#testimoni"}>
                    <p className="transition-all duration-300 ease-in-out hover:text-xl">Testimoni</p>
                </Link>
                <Link href={"#konsultasi"}>
                    <p className="transition-all duration-300 ease-in-out hover:text-xl">Konsultasi</p>
                </Link>
                <Link href={"#kontak"}>
                    <p className="transition-all duration-300 ease-in-out hover:text-xl">Kontak</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
