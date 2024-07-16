import styled from "styled-components"

export const Button = styled.button`

    width: ${props => props.theme === "primary" ? "342px" : props.theme === "secundary" ? "342px" : "220px" }; 
    height: 72px;
    color: ${props => props.theme === "primary" ? "white" : "black"};
    background: ${props => props.theme === "primary" ? "#00568b" : "none"};
    border-radius: 40px;
    border: ${props => props.theme === "primary" ? "none" : "1px solid black"};
    cursor: pointer;
    font-size: ${props => props.theme === "primary" ? "25px" : "20px"};  
    transition: 0.5s;
    &:hover{
    opacity: 0.8;
    transition: 0.5s;
    background-color:  ${props => props.theme === "primary" ? "#00568b" : "black"}; 
    color: white;
}
    &:active{
    opacity: 0.6;
     transition: 0s;
}


`

