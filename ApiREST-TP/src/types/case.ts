import { Document } from "mongoose";

export interface ICase extends Document{
    id: number
    caseVirus : {
        sciName : String;
        virusType : String;
        hasVaccine : Boolean;
    }
    caseDate : Date
    age : number
    gender : String
    location : String
    subjectState : String
}
