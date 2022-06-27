import styled from "styled-components"

export const FriendCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 362px;
    height: 489px;

    background-color: white;

    border-radius: 4px;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);

    .user-avatar {
        width: 90px;
        height: 90px;
        margin-top: 26px;

        border-radius: 100%;

        cursor: pointer;
    }

    .user-name {
        margin-top: 10px;

        font-size: 22px;
    }

    .location {
        margin-top: 7px;

        font-size: 14px;
    }

    .buttons {
        display: flex;
        gap: 6px;

        margin-top: 30px;

        button {
            width: 130px;
            height: 40px;

            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 30px;
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);

            background-color: white;

        }
    }

    .biography {
        margin-top: 30px;
        width: 282px;

        font-size: 14px;
        text-align: center;
    }

    .hobby-tags {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;

        width: 254px;
        margin-top: 30px;

        .tag {
            display: flex;
            align-items: center;

            padding: 9px 16px;

            font-size: 14px;

            background-color: rgba(0, 0, 0, 0.05);

            border-radius: 18px;
        }

    }
`