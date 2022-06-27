import styled from "styled-components";

export const MainCenterDiv = styled.div`
    display: flex;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    height: 70vh;
    width: 85%;
    top: -125px;
    background-color: grey;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
    border-left: solid 1px rgb(245, 245, 245);
`

export const ProfilePic_ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 30%;
    width: 100%;
    background-color: white;
`   

export const ProfilePic = styled.img`
    width: 80px;
    height: 80px;
`

export const UpdateImageButton = styled.button`
    width: 160px;
    height: 45px;
    background-color: white;
    border-radius: 25px;
    border: solid 1px rgb(224, 224, 224);
    margin-top 25px;
    font-size: 10px;
`

export const DeleteSaveDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 70%;
`
export const DeleteAccountButton = styled.button`
    width: 220px;
    height: 50px;
    background-color: white;
    border-radius: 25px;
    border: solid 1px rgb(224, 224, 224);
    font-size: 11px;
`
export const SaveButton = styled.button`
    width: 220px;
    height: 50px;
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    color: white;
    margin: 15px 0 80px 0;
    border-radius: 25px;
    border: solid 1px rgb(224, 224, 224);
    font-size: 11px;
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    border-left: solid 1px rgb(224, 224, 224);
    height: 100%;
    width: 70%;
    background-color: blue;
`

export const ProfilPreciseInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65%;
    background-color: red;
`

export const ProfilInfoLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
    width: 50%;
    height: 100%;
    background-color: white;
`

export const ProfilInfoRightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
    width: 50%;
    height: 100%;
    background-color: white;
`

export const FirstNameDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 15%;
    
`

export const LabelFirstName = styled.label`
    display: flex;
    width: 100%;
    height: 30%;
`

export const InputFirstName = styled.input`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    border: none;
    border-bottom: solid 1px rgb(224, 224, 224);
    
    ::placeholder {
        color: black;
    }
`

export const LastNameDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 15%;
    
`

export const LabelLastName = styled.label`
    display: flex;
    width: 100%;
    height: 30%;
`

export const InputLastName = styled.input`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    border: none;
    border-bottom: solid 1px rgb(224, 224, 224);
    
    ::placeholder {
        color: black;
    }
`

export const EmailDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 15%;
    
`

export const LabelEmail = styled.label`
    display: flex;
    width: 100%;
    height: 30%;
`

export const InputEmail = styled.input`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    border: none;
    border-bottom: solid 1px rgb(224, 224, 224);
    
    ::placeholder {
        color: black;
    }
`

export const UsernameDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 15%;
    
`
export const LabelUsername = styled.label`
    display: flex;
    width: 100%;
    height: 30%;
`

export const InputUsername = styled.input`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    border: none;
    border-bottom: solid 1px rgb(224, 224, 224);
    
    ::placeholder {
        color: black;
    }
`

export const LocationDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 15%;
  
`   

export const LabelLocation = styled.label`
    display: flex;
    width: 100%;
    height: 30%;
`

export const InputLocation = styled.input`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    border: none;
    border-bottom: solid 1px rgb(224, 224, 224);
    
    ::placeholder {
        color: black;
    }
`

export const PhoneDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 15%;
   
`

export const LabelPhone = styled.label`
    display: flex;
    width: 100%;
    height: 30%;
`

export const InputPhone = styled.input`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    border: none;
    border-bottom: solid 1px rgb(224, 224, 224);
    
    ::placeholder {
        color: black;
    }
`

export const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 15%;
    
`

export const LabelAbout = styled.label`
    display: flex;
    width: 100%;
    height: 30%;
`

export const InputAbout = styled.input`
    display: flex;
    
    width: 100%;
    height: 70%;
    border: none;
    border-bottom: solid 1px rgb(224, 224, 224);
    
    ::placeholder {
        color: black;
    }
`

export const PasswordDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 15%;
    
`

export const LabelPassword = styled.label`
    display: flex;
    width: 100%;
    height: 30%;
`

export const InputPassword = styled.input`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 70%;
    border: none;
    border-bottom: solid 1px rgb(224, 224, 224);
    font-size: 28px;

    ::placeholder {
        color: black;
    }
`

export const ThingsLikedDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 35%;
    width: 100%;
    background-color: magenta;
`
export const LikedParagraphDiv = styled.div`
    padding-left: 60px;
    display: flex;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    height: 17%;
    background-color: white;
    font-size: 14px;
`

export const ThingsLiked = styled.div`
    padding-left: 60px;
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    background-color: white;
    width: 100%;
    height: 27%;

    button {
        border-radius: 25px;
        border: solid 1px rgb(224, 224, 224);
        margin-right: 20px;
        width: 110px;
        height: 35px;
        
    }

`

export const LikedInputDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 56%;
    width: 100%;
    background-color: white;
`

export const LikedInput = styled.input`
    height: 45%;
    width: 80%;
    border: none;
    border-bottom: solid 1px rgb(224, 224, 224);
    font-size: 15px;
`

export const AddButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    height: 49%;
    width: 10%;
`

export const AddButton = styled.button`
    border-radius: 25px;
    border: solid 1px rgb(224, 224, 224);
    height: 30px;
    width: 65px;
    font-size: 10px;
    background-color: white;
`