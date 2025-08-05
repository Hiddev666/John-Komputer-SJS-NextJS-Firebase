'use client'

import { useState } from "react"
import { addConsultation } from "../utils/konsultasi"
import FormPopup from "./FormPopup"

const KonsultasiForm = () => {

    const [fullName, setFullName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [deviceModel, setDeviceModel] = useState(null)
    const [complaint, setComplaint] = useState(null)
    const [popup, setPopup] = useState(false)

    const consultationHandler = async () => {
        try {
            await addConsultation({
                full_name: fullName,
                email: email,
                phone: phone,
                device_model: deviceModel,
                complaint: complaint
            })
            setPopup(true)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <form action={consultationHandler} className="w-full flex gap-3 item-center justify-center mt-5">
            {popup && (
                <FormPopup />
            )}
            <div className="w-full md:w-2/3 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
                    <div className="flex flex-col w-full md:w-1/2">
                        <label>Nama Lengkap</label>
                        <input type="text" onInput={(e) => setFullName(e.target.value)} name="nama_lengkap" className="p-2 border-1 border-gray-600 rounded w-full" placeholder="ex: John Doe" />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <label>Email</label>
                        <input type="email" onInput={(e) => setEmail(e.target.value)} name="email" className="p-2 border-1 border-gray-600 rounded w-full" placeholder="ex: john@gmail.com" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
                    <div className="flex flex-col w-full md:w-1/2">
                        <label>Nomor Telepon</label>
                        <input type="text" onInput={(e) => setPhone(e.target.value)} name="nomor_telepon" className="p-2 border-1 border-gray-600 rounded w-full" />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <label>Model Perangkat</label>
                        <input type="text" onInput={(e) => setDeviceModel(e.target.value)} name="model_perangkat" className="p-2 border-1 border-gray-600 rounded w-full" placeholder="ex: Lenovo Thinkpad X1 Carbon" />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 w-full">
                    <div className="flex flex-col w-full">
                        <label>Keluhan</label>
                        <textarea name="keluhan" onInput={(e) => setComplaint(e.target.value)} className="p-2 border-1 border-gray-600 rounded" placeholder="Tulis keluhan di sini" rows={7}>
                        </textarea>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 w-full">
                    <button type="submit" className="p-3 bg-blue-800 rounded text-white font-semibold w-full md:w-1/2">Kirim</button>
                </div>
            </div>
        </form>
    )
}

export default KonsultasiForm
