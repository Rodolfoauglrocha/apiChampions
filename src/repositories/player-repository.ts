import { nameModel } from "../models/name-model"
import { PlayerModel } from "../models/player-model"


const database: PlayerModel[] = [
    {id:1, name: "Messi"},
    {id:2, name: "CR7"}
]

export const findAllPlayers = async(): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async(id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id)
}

export const insertPlayer = async(player: PlayerModel)=>{
    database.push(player)
}

export const deletePlayer = async(id: number)=>{
    const index = database.findIndex(p => p.id === id)

    if(index !== -1){
        database.splice(index, 1)
        return true
    }

    return false
    //console.log(index)
    //database.splice(index, 1)
}

export const findModifyPlayer = async (id:number, data: nameModel): Promise<nameModel> => {
    const index = database.findIndex((p) => p.id === id)
    database[index].name = data.name
    console.log(String(data.name))
    return database[index]
    
}