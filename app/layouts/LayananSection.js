import LayananCard from "../components/LayananCard"

const LayananSection = () => {
    return (
        <div className="p-10 py-20" id="layanan">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-2xl font-semibold">Layanan Kami</h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
                    <div className="flex gap-5">
                        <LayananCard icon="/icons/1.svg" text="Pembersihan & Optimalisasi" />
                        <LayananCard icon="/icons/2.svg" text="Perbaikan Hardware" />
                    </div>
                    <div className="flex gap-5">
                        <LayananCard icon="/icons/3.svg" text="Perbaikan Software" />
                        <LayananCard icon="/icons/4.svg" text="Jaringan & Konektivitas" />
                    </div>
                    <div className="flex gap-5">
                        <LayananCard icon="/icons/5.svg" text="Perakitan PC Custom" />
                        <LayananCard icon="/icons/6.svg" text="Pemulihan Data & Backup" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayananSection
