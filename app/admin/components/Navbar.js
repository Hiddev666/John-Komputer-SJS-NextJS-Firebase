import Image from "next/image"

const Navbar = () => {
    return (
        <div className="">
            <Image
            width={180}
            height={100}
            alt="Logo"
            src={"/logo-dark.svg"}
            />
        </div>
    )
}

export default Navbar
