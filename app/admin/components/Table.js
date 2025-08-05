'use client'

import { useState, useEffect } from "react"
import { getAllConsultations } from "@/app/utils/konsultasi"

const Table = () => {

    const [consultations, setConsulations] = useState()

    const getDataHandler = async () => {
        const ref = await getAllConsultations()
        setConsulations(ref)
    }

    useEffect(() => {
        getDataHandler()
    })

    const dateFormater = (isoFormat) => {
        const date = new Date(isoFormat)
        const dateFormated = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        return dateFormated
    }

    if(!consultations) return <p>Loading..</p>

    return (
        <table className="w-full text-sm mt-5">
            <tr className="border-b-1 border-b-gray-400 text-sm text-gray-700">
                <td className="p-2">Date</td>
                <td className="p-2">Nama</td>
                <td className="p-2">Email</td>
                <td className="p-2">Telepon</td>
                <td className="p-2">Model Perangkat</td>
                <td className="p-2">Keluhan</td>
            </tr>
            {consultations.map((consultation) => (
                <tr className="border-b-1 border-b-gray-400 text-sm ">
                    <td className="p-2">{dateFormater(consultation.created_at)}</td>
                    <td className="p-2">{consultation.full_name}</td>
                    <td className="p-2">{consultation.email}</td>
                    <td className="p-2">{consultation.phone}</td>
                    <td className="p-2">{consultation.device_model}</td>
                    <td className="p-2">{consultation.complaint}</td>
                </tr>
            ))}
        </table>
    )
}

export default Table
