import styled from "styled-components";


export const Container = styled.div`
height: 100vh;
display:flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;

span{
    color: red;
}

div{
    display: flex;
    flex-direction: column;
}

.inputsMenores {
display:flex;
flex-direction: row;
gap: 25px;
}

`



export const Form = styled.form`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;


`




export const ContainerInputs = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;

`


export const Title = styled.h1`

font-size: 50px;
margin-bottom: 40px;

`

export const InputLabel = styled.label`



`


export const Input = styled.input`
width: 342px;
height: 58px;
border-radius: 14px;
margin-bottom: 34px;
text-decoration: none;
border:none;
background: #a2a2a2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
outline: none;
padding-left: 25px;
font-size: 20px;

&::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

`


export const InputEmail = styled.input`

width: 714px;
height: 58px;
border-radius: 14px;
text-decoration: none;
border:none;
background: #a2a2a2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
outline: none;
padding-left: 25px;
font-size: 20px;
margin-bottom: 40px;

`







