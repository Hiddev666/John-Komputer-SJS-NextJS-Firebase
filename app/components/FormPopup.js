import { useState } from "react"

const FormPopup = () => {

    const [visibility, setVisibility] = useState("flex")

    return (
        <div className={`bg-blue-800 rounded-md text-white font-semibold p-3 fixed top-4 left-4 ${visibility} gap-3 items-center`}>
            <p>Konsultasi Berhasil Dikirim!</p>
            <button className="bg-white p-1 w-7 h-7 text-blue-800 rounded" onClick={() => setVisibility("hidden")}>X</button>
        </div>
    )
}

export default FormPopup
