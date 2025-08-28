import { Router } from "express";
import { getPlayer, getPlayerById } from "./controllers/players-controller";

const router = Router()

//Rotas
router.get("/api/players", getPlayer)
router.get("/api/players/:id", getPlayerById)

export default router