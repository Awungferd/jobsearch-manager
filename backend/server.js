import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import messageRouter from "./routes/router.js"


//============
const app = express();
app.use(express.json());
app.use(cors())
app.use(express.static('User'));
app.use(express.urlencoded({ extended: true }));
//=============== 
app.use('/', messageRouter)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
	console.log("Listening on http://localhost:" + PORT);
});