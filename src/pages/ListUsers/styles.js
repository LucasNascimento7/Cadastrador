import styled from "styled-components";

export const Container = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-top: 90px;

h1{

   margin-top: 20px;
}

`

export const ContainerUsers = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
 border: 1px solid black;
 margin-top: 30px;
 border-radius: 90px;


 

.users{

    
    display: grid;
    justify-content: center;
width: 1500px;
margin-bottom: 60px;
grid-template-columns: 400px 400px 400px;
button{

    background: none;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover{
    opacity: 0.6;
    transition: 0.5s;
   
   
}
    &:active{
    opacity: 0.5;
     transition: 0s;
}

}
    
}


`

export const Li = styled.li`

display: flex;
flex-direction: column;
align-items: center;
width: 350px;
height: 250px;
border-radius: 14px;
margin-top: 34px;
background: #a2a2a2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
outline: none;
font-size: 20px;

h3{
    font-size: 30px;
    margin-bottom: 10px;
}
p{
    margin-bottom: 15px;
font-size: 20px;
font-weight: 500;
}
`

export const TrashIcon = styled.img`
margin-top: 20px;

`

export const AvatarUser = styled.img`
width: 60px;
margin-top: 10px;

`