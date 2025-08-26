import { Router } from "express";
import { getPlayer } from "./controllers/players-controller";

const router = Router()

//Rotas
router.get("/api/players", getPlayer)

export default router