import styled from "styled-components";


export const ProfilParagraph = styled.p`
    cursor: pointer;
`

export const LogOutParagraph = styled.p`
cursor: pointer;
border: 0px;
`
export const ProfilPopUpDiv = styled.div`
    display: none;
    flex-direction: column;
    position: absolute;
    right: 40px;
    top: 75px;
    width: 180px;
    height: 80px;
    z-index: 1;
`

export const TopDiv = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 50%;
    width: 100%;
    background-color: rgba(250, 250, 250, 1);

    :hover {
        background-color: rgb(237, 237, 237);
    }
`

export const ProfileIcon = styled.img`
    box-sizing: border-box;
    margin: 0 20px;
    width: 21px;
    height: 21px;
    opacity: 0.35;
`

export const BottomDiv = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 50%;
    width: 100%;
    background-color: rgba(250, 250, 250, 1);

    :hover {
        background-color: rgb(237, 237, 237);
    }
`

export const LogOutIcon = styled.img`
    box-sizing: border-box;
    margin: 0 20px;
    width: 21px;
    height: 21px;
    opacity: 0.35;
`