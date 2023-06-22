import { ICase } from '../types/case'
import mongoose, { Schema, model, Document } from 'mongoose'

const caseSchema: Schema = new mongoose.Schema(
  {
    id : {
      type: Number,
      required: true,
    },
    caseVirus : {
      sciName : {
        type : String,
        required: true,
      },
      virusType : {
        type : String,
        required : true,
      },
      hasVaccine :{
        type :  Boolean,
        required : true,
      }
    },
    caseDate : {
      type: Date,
      required: true,
    }, 
    age : {
      type: Number,
      required: true,
    }, 
    gender : {
      type: String,
      required: true,
    }, 
    location : {
      type: String,
      required: true,
    }, 
    subjectState : {
      type: String,
      required: true,
    }, 

  },
  {timestamps: false}
)

export default model <ICase>("modelCase", caseSchema)
