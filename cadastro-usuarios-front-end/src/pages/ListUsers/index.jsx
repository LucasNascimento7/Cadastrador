import api from "../../services/api"
import { useEffect, useState, useRef } from "react"
import { Container, Li, TrashIcon, AvatarUser, ContainerUsers } from "./styles"
import trash from "../../assets/trash.svg"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"


function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()



    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get("/usuarios")
            setUsers(data)

        }

        getUsers()
    }, [])

async function deleteUsers(id){

    await api.delete(`/usuarios/${id}`)

    const updatedUsers = users.filter( user => user.id !== id )

    setUsers(updatedUsers)

}



    return (

        <Container>


            <Button theme="secundary" onClick={() => navigate("/")}>Cadastrar novo usuário</Button>
            
            <ContainerUsers>
               
                    <h1>Lista de Usuários</h1>
                
            <div className="users">
                {users.map(user => (

                    <ul key={user.id}>
                        <Li>
                            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            <button onClick={() => deleteUsers(user.id)}><TrashIcon src={trash} alt="Apagar-usuario" /></button>
                        </Li>


                    </ul>

                ))}
</div>
            </ContainerUsers>

        </Container>


    )

}

export default ListUsers