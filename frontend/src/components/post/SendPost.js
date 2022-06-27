import styled from "styled-components"

// Assets
import UserPhoto from "../../assets/images/users/jennifer.png"
import SendButton from "../../assets/svgs/send_button.svg"

const SendPostContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 23px;

    position: relative;
    height: 100%;
    padding: 30px;

    img {
        width: 71px;
        
    }

    input {
        height: 26px;
        width: 214px;

        border: none;

        font-size: 15px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor:pointer;

        width: 60px;
        height: 60px;

        position: absolute;
        right: 30px;

        border: none;
        border-radius: 100%;

        background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);

        img {
            width: 20px;
        }
    }
`

function SendPost() {

    return (
        <SendPostContainer>

            <img src={ UserPhoto } alt="User Photo" />

            <input placeholder="What's on your mind, Jennifer?" />

            <button type="submit">
                <img src={ SendButton } alt="Send Button" />
            </button>

        </SendPostContainer>
    )
}

export default SendPost
