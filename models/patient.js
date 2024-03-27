
import mongoose, { Mongoose } from "mongoose";


export const addressSCHEMA = mongoose.Schema({
    city: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    street: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    number: {
        type: String,
        minlength: 1,
        maxlength: 255,
    }
})

export const coronaSCHEMA = mongoose.Schema({
    vacDate: {
        type: Date
    },
    vacVendor: {
        type: String
    }
})

export const coronaHealthSCHEMA = mongoose.Schema({
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
})

export const healthSCHEMA = mongoose.Schema({
    corona: {
        type:[{
            type: coronaSCHEMA
        }],
        validate: [arrayLimit, 'exceeds the limit of 4']
    },
    seek : {
        type: coronaHealthSCHEMA
    }
})

const patientSCHEMA = mongoose.Schema({
    firstName: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    lastName: {
        type: String,
        minlength: 1,
        maxlength: 255,
    },
    bornDate: { 
        type: Date, default: Date.now() 
    },
    phone: {
        type: String,
        minlength: 5,
        maxlength: 256,
    },
    phoneMobile: {
        type: String,
        minlength: 5,
        maxlength: 256,
    },
    id: {
        type: String,
        unique: true,
    },
    address: addressSCHEMA,
    health: healthSCHEMA
})

function arrayLimit(val) {
    return val.length <= 4;
}

export const patientModel = mongoose.model("patients", patientSCHEMA)

