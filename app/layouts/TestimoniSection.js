import TestimoniCard from "../components/TestimoniCard"

const TestimoniSection = () => {
    return (
        <div className="p-10 py-20 bg-blue-800 flex flex-col md:flex-row gap-5" id="testimoni">
            <TestimoniCard name="Sari, Mahasiswi" testimoni="Laptop saya yang udah koma, di sini langsung sembuh total! Recomended banget!" rate="5/5"/>
            <TestimoniCard name="Rizky, Pegawai" testimoni="Barangnya keren abis, sesuai sama deskripsi. Nggak nyesel beli di sini!" rate="5/5"/>
            <TestimoniCard name="Siti, Mahasiswi" testimoni="Pelayanan responsif banget, cuma pengirimannya agak lama. Tapi overall, puas kok!" rate="4/5"/>
        </div>
    )
}

export default TestimoniSection
