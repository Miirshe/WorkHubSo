import mongoose from "mongoose";

const employerAccountSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    cover: {
        type: String,
        required: false
    },
    logo: {
        type: String,
        required: false
    },
    about: {
        type: String,
        required: false
    },
    industry: {
        type: String,
        required: false
    },
    founded: {
        type: Number,
        required: false
    },
    createAt: {
        type: Date,
        default: () => Date.now()
    },
    updateAt: {
        type: Date,
        default: () => Date.now()
    }
})

export const employerAccountModel = mongoose.model('employerAccountSchema', employerAccountSchema)