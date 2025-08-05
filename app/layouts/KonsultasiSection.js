import KonsultasiForm from "../components/KonsultasiForm"

const KonsultasiSection = () => {
    return (
        <div className="p-10 py-20" id="konsultasi">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-2xl font-semibold">Konsultasi Gratis</h1>
                <KonsultasiForm />
            </div>
        </div>
    )
}

export default KonsultasiSection
