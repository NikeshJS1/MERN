import express from 'express'
import cors from 'cors'
import TaskModel from './TaskModel.js'

const app = express();
app.use(express.json());
app.use(cors())
const taskRouter = express.Router()

app.use('/api/task', taskRouter);

taskRouter.post('/', async (req, res) => {
    const {name} = req.body;
    try{
        const task = await new TaskModel({name}).save()
        res.status(201).send({
            message: "Created successfully",
            task
        })


    }
    catch(error){
        res.status(500).send({
            error: 'Sommething went wrong'
        })
    }
})

export default app