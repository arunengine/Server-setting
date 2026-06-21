import express from "express" 
import { getparams , getQuery , getHeaders , getBody} from "../controllers/controller.js";

const routes = express.Router();

routes.get("/params/:id", getparams)

routes.get("/query", getQuery);

routes.get("/headers" , getHeaders)

routes.get("/body" , getBody)



export default routes