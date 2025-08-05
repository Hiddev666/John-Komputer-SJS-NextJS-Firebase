import Image from "next/image"

const TestimoniCard = (props) => {
    return (
        <div className="bg-white p-4 rounded-md w-full md:w-1/3 flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <p className="font-semibold">{props.name}</p>
                <div className="flex items-center gap-2">
                    <Image
                        width={20}
                        height={20}
                        src={"/icons/star.svg"}
                        alt="Rate"
                    />
                    <p>{props.rate}</p>
                </div>
            </div>
            <p>{`"${props.testimoni}"`}</p>
        </div>
    )
}

export default TestimoniCard
