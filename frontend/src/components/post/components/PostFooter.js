import styled from "styled-components"
// Assets
import HeartIcon from "../../../assets/svgs/heart.svg"
import ShareIcon from "../../../assets/svgs/share.svg"
// Components
import PostLikeCounter from "./PostLikeCounter"

const Footer = styled.div`
    display: flex;

    position: relative;
    margin-top: 34px!important;

    div {
        display: flex;
        gap: 18px;
    }

    .share-container {
        margin-left: 41px;
    }

`


function PostFooter() {

    return (
        <Footer>

            <div className="like-container">
                <img src={HeartIcon} alt="Heart Icon" />
                <p>Like</p>
            </div>

            <div className="share-container">
                <img src={ShareIcon} alt="Share Icon" />
                <p>Share</p>
            </div>

            <PostLikeCounter />

        </Footer>
    )
}

export default PostFooter
