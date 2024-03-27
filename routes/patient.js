import express from "express"
import { addPatient, 
        getAllPatients, 
        updatePatient, 
        deletePatient, 
        getPatientById } from "../controllers/patient.js"

const router = express.Router();


router.get("/", getAllPatients);
router.post("/", addPatient);

router.get("/:id", getPatientById);
router.delete("/:id", deletePatient);
router.put("/:id", updatePatient);

export default router;