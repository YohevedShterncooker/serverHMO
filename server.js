import express from "express";
import { connectToDB } from "./DB/conectedMongoDb.js";
import cors from "cors";
import patientRouter from "./routes/patient.js";

const app = express();
app.use(cors())
app.use(express.json());

connectToDB();

app.use("/api/patient", patientRouter);


app.listen(4000,()=>{
    console.log("server on 4000");
})

