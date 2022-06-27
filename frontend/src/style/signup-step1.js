import styled from 'styled-components';
import EmailIcon from "../assets/images/icons8-mail-30.png";

export const Container = styled.div`
display:flex;
height: 100vh;
width: 100vw;
`
export const RightContainer = styled.div`
height: 100%;
width: 60%;
display: flex;
flex-direction: column;
`
export const SignUpContainer = styled.div`
height: 60%;
display: flex;
flex-direction: column;
justify-content: flex-end;
`
export const Inputboxes = styled.div`
height: 50%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: flex-start;
padding-top: 50px;
`
export const EmailInput = styled.input`
background-image:url(${EmailIcon});
background-repeat: no-repeat;
position: left;
padding-left: 35px;
padding-top:8px;
padding-bottom: 12px;
width: 250px; 
border:0px;
border-bottom: 1px solid grey;
`

export const SignUpButtonBox = styled.div`
height: 27%;
display:flex;
flex-direction:column;
align-items: center;
justify-content:space-evenly;
`
export const SignUpButton = styled.button`
background:linear-gradient(120deg, #b64cf8 0%, #3365fa);
opacity: 0.65;
border-radius: 30px;
border: 1px solid white;
height: 60px;
font-size: 12px;
justify-content: center;
align-items: center;
width: 280px;
color:rgb(214, 200, 200);
&:hover{
    opacity:0.4;
}
`
export const DotBox = styled.div`
display:flex;
align-items:center;
justify-content: space-evenly;
width: 7%;
height: 10%;
`
export const Dots = styled.span`
height: 8px;
width: 8px;
background-color:${props => props.filled?"black":"white"};
border-radius: 50%;
border:1px solid black;
opacity:${props => props.filled? 0.7: 0.3};
`
