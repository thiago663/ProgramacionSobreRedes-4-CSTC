// DEPRECATED
/* 
import mongoose, { Schema, model } from 'mongoose'
import { IVirus } from '../types/virus'

const virusSchema: Schema = new mongoose.Schema(
    {
        sciName: {
            type: String,
            required: true,
        },
        virusType: {
            type: String,
            required: true,
        },
        hasVaccine: {
            type: Boolean,
            required: true,
        },
    },
    {timestamps: false}
)


export default model <IVirus>("modelVirus", virusSchema)
*/