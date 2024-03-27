import { patientModel} from "../models/patient.js";


export const addPatient = async (req, res) => {     
    try {
        //const samePatient = await patientModel.findOne({ req.body.id: id });
        //if (samePatient)
        //    return res.status(409).json({ type: "same patient", message: "patient with such id already exists" })
        
        let newPatient = new patientModel(req.body);
        await newPatient.save();
        res.status(200).json(newPatient)
    }
    catch (err) {
        res.status(400).json({ type: "invalid operation", message: "cannot add user" })
    }
}

export const getAllPatients = async (req, res) => {
    try {
       let allPatients = await patientModel.find({});
       res.json(allPatients);
   } catch (err) {
       res.status(400).json({ type: "invalid operation", message: "cannot collect patients" })
   }
}

export const deletePatient = async (req, res) => {
    let { id } = req.params;
    try {
        let patient = await patientModel.find({ id:id });
        if (!patient)
            return res.status(404).json({ type: "no patient to delete", message: "no patient with such id to delete" })
            
        console.log(patient)
        patient.forEach(async function(obj) { 
            let patient_del = await patientModel.findByIdAndDelete(obj._id);
            if (!patient_del)
                return res.status(404).json({ type: "can delete patient " , message: obj._id })
            return res.json(patient)
        });
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ type: "invalid operation", message: "sorry cannot get patient" })
    }
}

export const getPatientById = async (req, res) => {
    let { id } = req.params;
    try {
        let patient = await patientModel.find({ id:id });
        if (!patient)
            return res.status(404).json({ type: "no patient to delete", message: "no patient with such id to delete" })
            
        res.json(patient[0]); 
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ type: "invalid operation", message: "sorry cannot get patient" })
    }
}

export const updatePatient = async (req, res) => {
    let { id } = req.params;
    try {
        console.log(id)
        let patient = await patientModel.find({ id:id });
        if (!patient)
            return res.status(404).json({ type: "no patient to delete", message: "no patient with such id to delete" })
            
        patient.forEach(async function(obj) { 
            let patient_del = await patientModel.findByIdAndUpdate(obj._id, req.body,{new:true});
            if (!patient_del)
                return res.status(404).json({ type: "can delete patient " , message: obj._id })
            return res.json(patient)
        });
    }
    catch (err) {
        console.log(err)
        res.status(400).json({ type: "invalid operation", message: "sorry cannot get patient" })
    }
}






