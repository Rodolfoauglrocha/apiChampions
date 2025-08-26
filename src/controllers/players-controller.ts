import {Request, Response} from "express"
import { getPlayerData } from "../services/players-services"
import { ok } from "../utils/http-helper"

export const getPlayer = async (req: Request, res: Response) => {
   const httpResponse = await getPlayerData()
   
   res.status(httpResponse.statusCode).json(httpResponse.body)
}