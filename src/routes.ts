import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer } from "./controllers/players-controller";

const router = Router()

//Rotas
router.get("/api/players", getPlayer)
router.post("/api/players", postPlayer)
router.delete("/api/players/:id", deletePlayer)
router.get("/api/players/:id", getPlayerById)

export default router