import styled from "styled-components";

export const ProfilInfoSocialNums = styled.div`
    border: solid 1px rgb(224, 224, 224);
    border-right: none;
    border-left: none;
    border-bottom: none;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    height: 30%;
    width: 100%;
    background-color: white;
    font-size: 17px;
`

export const FirstParagraph = styled.p`
    font-size: 20px;
`

export const PostsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 9%;
    height: 100%;
`

export const LikesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 9%;
    height: 100%;

    :active {
        border-bottom: 3px solid #AD73FD;
        
    }
`

export const FriendsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 9%;
    height: 100%;
    
    border-bottom: 3px solid #AD73FD;
`

export const FollowersDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 9%;
    height: 100%;

    :active {
        border-bottom: 3px solid #AD73FD;
        
    }
`

export const FollowingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 9%;
    height: 100%;

    :active {
        border-bottom: 3px solid #AD73FD;
        
    }
`