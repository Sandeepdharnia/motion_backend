import styled from 'styled-components';
import AvatarIcon from '../assets/svgs/avatar.svg';
import PasswordIcon from '../assets/svgs/password.svg';

export const MainContainer= styled.div`
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
export const SignInContainer = styled.div`
height: 50%;
display: flex;
flex-direction: column;
justify-content:space-evenly;
`
export const Header = styled.h1`
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: black;
    font-size:34px;
    align-items: center;
    justify-content: flex-end;
`
export const Inputboxes = styled.div`
height: 25%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: flex-start;
`
export const UsernameInput = styled.input`
background-image:url(${AvatarIcon});
background-repeat: no-repeat;
position: left;
padding-left: 35px;
padding-bottom: 15px;
width: 250px; 
border:0px;
border-bottom: 1px solid grey;

`
export const PasswordnameInput = styled.input`
background-image:url(${PasswordIcon});
background-repeat: no-repeat;
position: left;
padding-left: 35px;
padding-bottom: 15px;
margin-top: 40px;
width: 250px; 
border:0px;
border-bottom: 1px solid grey;
`
export const SigninbuttonBox = styled.div`
height: 40%;
display:flex;
align-items: center;
justify-content: center;
`
export const SigninButton= styled.button `
background:linear-gradient(120deg, #b64cf8 0%, #3365fa);
opacity: 0.65;
border-radius: 30px;
border: 1px solid white;
height: 60px;
display: flex;
flex-direction:column;
font-size: 12px;
justify-content: center;
align-items: center;
width: 280px;
color:rgb(214, 200, 200);
&:hover{
    opacity:0.4;
}
`