import Image from "next/image"

const ContactSection = () => {
    return (
        <div className="p-10 bg-blue-800 flex justify-between items-center" id="kontak">
            <div className="flex flex-col gap-3">
                <Image
                    width={180}
                    height={100}
                    src={"/logo-light.svg"}
                    alt="Logo"
                />
                <p className="text-white">Jembatan Ampera, Jl. Lintas Sumatera, Seberang Ulu I,<br /> Palembang, Sumatera Selatan</p>
            </div>
            <div className="flex gap-2">
                <Image
                    width={50}
                    height={50}
                    src={"/icons/whatsapp.svg"}
                    alt="WhatsApp"
                    className="bg-white p-3 rounded-md"
                />
                <Image
                    width={50}
                    height={50}
                    src={"/icons/instagram.svg"}
                    alt="WhatsApp"
                    className="bg-white p-3 rounded-md"
                />
            </div>
        </div>
    )
}

export default ContactSection
