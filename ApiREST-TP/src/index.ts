import express, { Response, Request } from "express"
import { ICase } from '../src/types/case';
import modelCase from '../src/models/caseSchema';
import { log } from "console";
import dotenv from 'dotenv';
import app from './app';
import './database';
import { resolve } from "dns";
import { rejects } from "assert";
var crypto = require('crypto');



function mongoArrayParser(unparsedCases : ICase[]) {
  const Showcases: ICase[] = []
  unparsedCases.forEach(auxcase => {
        //@ts-ignore
        const {_id, __v, ...indiCase} = auxcase._doc
        //@ts-ignore
        Showcases.push(indiCase)
      })
  return Showcases    
}

function mongoCaseParser(unparsedCase : ICase){
  //@ts-ignore
  const {_id, __v, ...ShowCase} = unparsedCase._doc 
  return ShowCase
}


const getCases = async (req: Request, res: Response): Promise<void> => {
    try {
      const cases: ICase[] = await modelCase.find()
      res.status(200).json(mongoArrayParser(cases))
    } catch (error) {
      throw error
    }
}


const getCaseById = async (req: Request, res: Response): Promise<void> => {
  try {
    const singleCase: ICase | null = await modelCase.findOne({
      id : Number(req.params.id) 
  })
    if(singleCase != null) res.status(200).json(mongoCaseParser(singleCase))
    else res.sendStatus(404) 
  } catch (error) {
    throw error
  }
} 
  

const addCase = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as 
    Pick<ICase, "id" | "caseVirus" | "caseDate" | "age" | "gender" | "location" | "subjectState">
    const Case: ICase = await modelCase.create({
      id: crypto.randomInt(1,500),
      caseVirus: body.caseVirus,
      caseDate:  body.caseDate,
      age: body.age,
      gender: body.gender,
      location: body.location,
      subjectState: body.subjectState,
    })
  
    const newCase: ICase = await Case.save()
    res.status(201).json(mongoCaseParser(newCase))
    } catch (error) {
      throw error
    }
  }

const updateCase = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedCase: ICase | null = await modelCase.findOneAndUpdate(
      { _id: req.params.id },
      req.body, {new: true}
    )
    if(updatedCase != null) res.status(200).json(mongoCaseParser(updatedCase))
    else res.sendStatus(404)
  } catch (error) {
    throw error
  }
}

const updateVirus = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log()
    const singleVirus: ICase | null = await modelCase.findOneAndUpdate(
      { _id: req.params.id }, 
      { "caseVirus.sciName": req.body.sciName,
        "caseVirus.virusType": req.body.virusType,
        "caseVirus.hasVaccine": req.body.hasVaccine
      }, {new: true}
    )
    if(singleVirus != null) res.status(200).json(mongoCaseParser(singleVirus))
    else res.sendStatus(404)
  } catch (error) {
    throw error
  }
}

const deleteCase = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCase: ICase | null = await modelCase.findOneAndRemove({
      _id : req.params.id 
  })
    if(deletedCase != null) res.sendStatus(200).json(mongoCaseParser(deletedCase))
    else res.sendStatus(404)
  } catch (error) {
    throw error
  }
}
  
const getCasesByVirus = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(req.params)
    const virusCases: ICase[] | null = await modelCase.find({
      "caseVirus.sciName" : req.params.sciName
  }) 
    console.log(virusCases)
    if(virusCases != null) res.status(200).json(mongoArrayParser(virusCases))
    else res.sendStatus(404) 
  } catch (error) {
    throw error
  }
}
  
const getCasesByAge = async (req: Request, res: Response): Promise<void> => {
  try {
    const ageCases: ICase[] | null = await modelCase.find({
      _age : req.params.age
  }) 
    if(ageCases != null) res.status(200).json(mongoArrayParser(ageCases))
    else res.sendStatus(404) 
  } catch (error) {
    throw error
  }
}

const virusHasVaccine = async (req: Request, res: Response): Promise<void> => {
  try {
    const virusVaccine : ICase | null = await modelCase.findOne({
      "caseVirus.sciName" : req.params.sciName
  }) 
    if(virusVaccine != null){
      if(virusVaccine.caseVirus.hasVaccine){
        res.send("El virus " + virusVaccine.caseVirus.sciName + " tiene vacuna");
      }else if(!virusVaccine.caseVirus.hasVaccine){
        res.send("El virus " + virusVaccine.caseVirus.sciName + " NO tiene vacuna");
      }
    } else res.sendStatus(404) 
  } catch (error) {
    throw error
  }
} 
  

export { getCases, getCaseById, addCase, updateCase, updateVirus, deleteCase, getCasesByVirus, 
  getCasesByAge, virusHasVaccine }

  

