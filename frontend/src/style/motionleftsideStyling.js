import styled from 'styled-components';
import LeftBackground from '../assets/images/background_image.png';


export const Container= styled.div`
height: 100%;
width:40%;
display:flex;
flex-direction:column;
background:url(${LeftBackground}), linear-gradient(120deg, #b64cf8 0%, #3365fa);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
align-items: center;
`

export const MotionLogo = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
    justify-content:flex-end;
    align-items: center;
    margin-top:280px;
`
export const Image = styled.img`
    width:100px; 
    height:100px;   
    display:flex;
`
export const Header = styled.h1`
    display:flex;
    font-size: 35px; 
    padding:25PX;   
    color:white;
`
export const Paragraph = styled.p`
    display:flex;
    font-size: 20px;
    opacity: 0.3;
    color:white;
    margin:0px;
`
export const Paragraph2= styled(Paragraph)`
    display:flex;
    font-size: 20px;
    opacity:0.3;
`
export const AppleGoogleLogoBox = styled.div`
margin-top: 40px;
margin-bottom:100px;
display: flex;
justify-content: space-around;
width: 240px;
`

export const AppleLogo = styled.img`
    height:17px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GoogleLogo = styled.img`
    height:14px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ButtonApple = styled.button`
    display: flex;
    border-radius: 20px;
    padding: 5px 30px;
    border:1px solid white;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    width: 110px;
    height:35px;
    &:hover{
        opacity: 0.3;
    }
    cursor:pointer;
`
export const ButtonGoogle = styled.button`
    display: flex;
    border-radius: 20px;
    padding: 5px 30px;
    border:1px solid white;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    width: 110px;
    height:35px;
    &:hover{
        opacity: 0.3;
    }
    cursor:pointer;
`
export const TwitterFBInstaBox = styled.div`
    height:8%;
    width:35%;
    opacity: 0.4;
    display: flex;
    align-items: center;
    object-fit: contain;
    justify-content: center;
`
export const TwitterFBInstaImages = styled.img`
padding: 23px 5px;
margin-top: 180px;
height:100px;
`
export const Footer = styled.footer`
display: flex;
height: 5%;
margin-top: 160px;
`
export const Paragraph3 = styled.p`
display:flex;
align-items: flex-start;
font-size: small;
color:white;
`