import mongoose from "mongoose";
import app from "./app.js";

const PORT = 8080
const database_URL = "mongodb+srv://nikeshjs123:nikeshjs@cluster0.m7zwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
mongoose.connect(database_URL)
.then(() => console.log("Database connected successfully"))
.catch(error => console.log("Error in connecting database: " + error))



