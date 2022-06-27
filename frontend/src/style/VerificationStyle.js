import styled from 'styled-components';


export const MainContainer = styled.div`
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
export const SignUpBox = styled.div`
height: 50%;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
margin-top:50px;
`
export const Header = styled.h1`
display: flex;
justify-content: center;
align-items: flex-end;
height: 60%;
width: 100%;
color: black;
font-size:40px;
`
export const InputVerification = styled.input`
display:flex;
flex-direction: column;
width: 60%;
align-content:center;
border:0px;
border-bottom: 1px solid grey;
opacity:0.7;
height: 10%;
font-size:16px;
margin-top:100px;
`
export const InputTopBox = styled.div`
display:flex;
padding-top: 20px;
width:60%;
height:40%;
justify-content:space-between;
flex-wrap:wrap;
`
export const InputEmail = styled.input`
display:column;
width:46%;
border:0px;
border-bottom: 1px solid grey;
height:25%;
opacity:0.7;
font-size:16px;
`
export const InputUserName = styled.input`
display:column;
width:46%;
border:0px;
border-bottom: 1px solid grey;
height:25%;
opacity:0.7;
font-size:16px;
`
export const InputFirstName = styled.input`
display:column;
width:46%;
border:0px;
border-bottom: 1px solid grey;
height:25%;
opacity:0.7;
font-size:16px;
`
export const InputLastName = styled.input`
display:column;
width:46%;
border:0px;
border-bottom: 1px solid grey;
height:25%;
opacity:0.7;
font-size:16px;
`
export const InputPassword = styled.input`
display:column;
width:46%;
border:0px;
border-bottom: 1px solid grey;
height:25%;
opacity:0.7;
font-size:16px;
`
export const InputPasswordRepeat = styled.input`
display:column;
width:46%;
border:0px;
border-bottom: 1px solid grey;
height:25%;
opacity:0.7;
font-size:16px;
`
export const ButtonBox = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-around;
height:20%;
background:white;
margin-top:250px;
`
export const Button = styled.button`
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