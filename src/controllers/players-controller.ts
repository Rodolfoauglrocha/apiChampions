import {Request, Response} from "express"
import { getPlayerByIdService, getPlayerData } from "../services/players-services"
import { ok } from "../utils/http-helper"

export const getPlayer = async (req: Request, res: Response) => {
   const httpResponse = await getPlayerData()
   
   res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async(req: Request, res: Response) => {
   const id = parseInt(req.params.id)
   const httpResponse = await getPlayerByIdService(id)

   res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async(req: Request, res: Response)=> {
   
}