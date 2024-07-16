import express from "express"
import { PrismaClient } from '@prisma/client'
import cors from "cors"
const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.listen(3000)
app.use(cors())



app.get("/usuarios", async (request, response) => {

    const users = await prisma.user.findMany()

    response.status(200).json(users)
})

app.post("/usuarios", async (request, response) => {


    const user = await prisma.user.create({

        data: {
            email: request.body.email,
            age: request.body.age,
            name: request.body.name
        }

    })
    

    response.status(201).json(user)

})

app.put("/usuarios/:id", async (request, response) => {



    const user = await prisma.user.update({

        where: {

            id: request.params.id
        },

        data: {
            email: request.body.email,
            age: request.body.age,
            name: request.body.name
        }

    })



    response.status(200).json(user)

})


app.delete("/usuarios/:id", async (request, response) => {



    const user = await prisma.user.delete({

        where: {

            id: request.params.id
        },


    })



    response.status(202).json({ message: "usuário deletado com sucesso!" })

})

