import styled from "styled-components"

export const MainContainer = styled.div`
    position: absolute;
    top: 50px;
    right: 160px;

    width: 362px;
    height: 410px;
    padding: 30px;

    background-color: white;

    z-index: 1;

    img {
        width: 40px;
        height: 40px;

        border-radius: 100%;
    }
    
    button {
        width: 40px;
        height: 40px;

        border-radius: 100%;
        border: none;

        .accept-request-icon {
            width: 17.6px;
            height: 13.4px;
        }

        .deny-request-icon {
            width: 14px;
            height: 14px;
        }
    }
    
    .pending {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 40px;
        height: 40px;

        border-radius: 100%;

        background-color: rgba(0, 0, 0, 0.05);

        img {
           width: 16px;
           height: 16px; 
        }
    }
`

export const ReceivedRequestContainer = styled.div`
    .received-container {
        display: grid;
        grid-template: 0.1fr 0.1fr / 0.1fr 2fr 1fr 1fr;
        grid-gap: 10px;
        justify-items: center;

        margin-top: 20px;

        img {
            grid-row: 1 / 3;
            grid-column: 1;
        }

        .user-name {
            grid-row: 1;
            grid-column: 2;

            font-size: 14px;
        }

        .location {
            grid-row: 2;
            grid-column: 2;

            font-size: 14px;

            opacity: 0.5;
        }

        .accept-request {
            grid-row: 1 / 3;
            grid-column: 3;

            justify-self: end;

            background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
        }

        .deny-request {
            grid-row: 1 / 3;
            grid-column: 4;

            justify-self: end;
        }
    }
    
`

export const SentRequestContainer = styled.div`
    margin-top: 50px;

    .sent-container {
        display: grid;
        grid-template: 0.1fr 0.1fr / 0.1fr 1fr 1fr; 
        grid-gap: 10px;
        justify-items: center;

        margin-top: 20px;
        
        img {
            grid-row: 1 / 3;
            grid-column: 1;
        }

        .user-name {
            grid-row: 1;
            grid-column: 2;

            font-size: 14px;
        }

        .location {
            grid-row: 2;
            grid-column: 2;

            font-size: 14px;

            opacity: 0.5;
        }

        .pending {
            grid-row: 1 / 3;
            grid-column: 3;

            justify-self: end;
        }
    }
`