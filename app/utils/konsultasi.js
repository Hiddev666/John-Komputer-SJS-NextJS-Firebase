import { collection, addDoc, getDocs, query } from "firebase/firestore"
import { db } from "../config/firebase"

const addConsultation = async (formData) => {
    try {
        const collectionRef = collection(db, "consultations")
        const docRef = await addDoc(collectionRef, {
            full_name: formData.full_name,
            email: formData.email,
            phone: formData.phone,
            device_model: formData.device_model,
            complaint: formData.complaint,
            created_at: new Date().toISOString()
        })
    } catch(error) {
        console.log(error.message)
    }
}

const getAllConsultations = async () => {
    try {
        const collectionRef = collection(db, "consultations")
        const docSnapshot = await getDocs(query(collectionRef))
        return docSnapshot.docs. map((doc) => ({id: doc.id, ...doc.data()}))
    } catch (error) {
        console.log(error.message)
    }
}

export {addConsultation, getAllConsultations}
