import { Router } from "express";
import { updatePlayer, deletePlayer, getPlayer, getPlayerById, postPlayer } from "./controllers/players-controller";

const router = Router()

//Rotas
router.get("/api/players", getPlayer)
router.post("/api/players", postPlayer)
router.delete("/api/players/:id", deletePlayer)
router.get("/api/players/:id", getPlayerById)
router.patch("/api/players/:id", updatePlayer)

export default router