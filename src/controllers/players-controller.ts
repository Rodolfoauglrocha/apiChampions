import {Request, Response} from "express"
import { deletePlayerService, createPlayerService, getPlayerByIdService, getPlayerData, updatePlayerService } from "../services/players-services"
import { noContent, ok } from "../utils/http-helper"
import { nameModel } from "../models/name-model"
import { findModifyPlayer } from "../repositories/player-repository"

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
   const bodyValue = req.body
   const httpResponse = await createPlayerService(bodyValue)
   if(httpResponse){
      res.status(httpResponse.statusCode).json(httpResponse?.body)
   } else {
      const response = await noContent()
      res.status(response.statusCode).json(response.body)
   }
   console.log(bodyValue)
}

export const deletePlayer = async (req:Request, res: Response) => {
   const id = parseInt(req.params.id)
   const httpResponse = await deletePlayerService(id)

   res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req:Request, res: Response) => {
  const id = parseInt(req.params.id)
  const bodyValue:nameModel = req.body

   const httpResponse = await updatePlayerService(id, bodyValue)

  res.status(httpResponse.statusCode).json(httpResponse.body)

}