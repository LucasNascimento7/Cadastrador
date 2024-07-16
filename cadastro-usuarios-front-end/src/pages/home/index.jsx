import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"

import {
  Container,
  Form,
  ContainerInputs,
  Title,
  InputLabel,
  InputEmail,
  Input,
} from "./styles"


import Button  from "../../components/Button"
import UsersPng from "../../components/UserPng"

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {

    const data = await api.post("/usuarios", {

      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value

    })

    navigate("/lista-de-usuarios")

  }

  return (
    <Container>
      
       <UsersPng theme="primary"/>
      
      <Form action="">
        <Title>Cadastrar Usuário</Title>
        <ContainerInputs>
          <div className="inputsMenores">
            <div>
              <InputLabel>Nome<span>*</span></InputLabel>
              <Input ref={inputName} type="text" placeholder="Nome do usuário" />
            </div>
            <div>
              <InputLabel>Idade<span>*</span></InputLabel>
              <Input ref={inputAge} type="number" placeholder="Idade do usuário" />
            </div>
          </div>
          <div>
            <InputLabel>E-mail<span>*</span></InputLabel>
            <InputEmail ref={inputEmail} type="email" placeholder="E-mail do usuário"></InputEmail>
          </div>
        </ContainerInputs>
        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
          </Button>
      </Form>
      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>Ver Usuários</Button>
    </Container>
  )
}

export default Home
