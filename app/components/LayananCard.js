import Image from "next/image"

const LayananCard = (props) => {
    return (
        <div className="p-3 bg-white w-40 h-40 flex flex-col items-center justify-center gap-3 border-1 border-gray-500 rounded-md hover:shadow-lg hover:shadow-gray-400">
            <Image
                width={50}
                height={50}
                src={props.icon}
                alt="CARD"
            />
            <p className="text-center font-semibold leading-5">{props.text}</p>
        </div>
    )
}

export default LayananCard
