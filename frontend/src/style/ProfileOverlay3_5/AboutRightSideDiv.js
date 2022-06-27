import styled from "styled-components";

export const AboutRightSideDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding-left: 40px;
    background-color: white;
`

export const ThingsParagraphDiv = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
    width: 100%;
    height: 30%;
    font-size: 17px;
`

export const ThingsLiked = styled.div`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    background-color: white;
    width: 100%;
    height: 60%;

    button {
        border-radius: 25px;
        border: solid 1px rgb(224, 224, 224);
        margin-right: 20px;
        width: 100px;
        height: 40px;
    }
`