import express, {Request, Response, json} from "express"
import router from "./routes"

function createApp() {
    const app = express()
    app.use(express.json())

    app.use("/", router)

    return app
}

export default createApp