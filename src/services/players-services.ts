import { nameModel } from "../models/name-model"
import { PlayerModel } from "../models/player-model"
import * as PlayerRepository from "../repositories/player-repository"
import * as HttpResponse from "../utils/http-helper"


export const getPlayerData = async()=> {
    
    const data = await PlayerRepository.findAllPlayers()

    let response = null

    if(data){
       response = await HttpResponse.ok(data)
    } else {
       response = await HttpResponse.noContent()
    }
    
    return response
}

export const getPlayerByIdService = async(id: number) => {
   const data = await PlayerRepository.findPlayerById(id)

   let response = null

   if(data){
      response = await HttpResponse.ok(data)
   } else {
      response = HttpResponse.noContent()
   }

   return response
}

export const createPlayerService = async(player: PlayerModel)=> {

   if(player){
      await PlayerRepository.insertPlayer(player)

      return HttpResponse.created()

   }else {
      console.log("bad")
      return HttpResponse.badRequest()
   }
}

export const deletePlayerService = async(id: number)=> {
   let response = null
   const isDeleted = await PlayerRepository.deletePlayer(id)
   
   if(isDeleted){
      response = HttpResponse.ok({message: "Delete"})
   }else{
      response = HttpResponse.badRequest()
   }

   return response
   
}

export const updatePlayerService = async(id: number, name: nameModel)=> {
   const data = await PlayerRepository.findModifyPlayer(id, name)
   const response = await HttpResponse.ok(data)

   return response
}