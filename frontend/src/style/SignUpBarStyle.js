import styled from 'styled-components';

export const Navbar = styled.div`
    display: flex;
    height:8%;
    justify-content: flex-end;
    padding-top: 40px;
    padding-right: 40px;
    align-items: center;
`

export const LabelSignUp = styled.label`
        height: 3%;
        display: flex;
        align-items: center;
        padding-right: 10px;
        font-size:14px;
`
export const SignUpButton = styled.button`
        border: 1px solid rgb(176, 175, 175);
        border-radius: 25px;
        width: 9%;
        height: 100%;
        background-color:white;
        font-size:10px; 
        &:hover{
        opacity: 0.3;
        }
        
`