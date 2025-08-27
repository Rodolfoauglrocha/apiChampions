import * as PlayerRepository from "../repositories/player-repository"
import { noContent, ok } from "../utils/http-helper"

export const getPlayerData = async()=> {
    
    const data = await PlayerRepository.findAllPlayers()

    let response = null

    if(data){
       response = await ok(data)
    } else {
       response = await noContent() 
    }
    
    return response
}