import styled from "styled-components"

const LikeCounter = styled.div`
    position: absolute;
    right: 30px;
`

function PostLikeCounter() {

    return (
        <LikeCounter>2 likes</LikeCounter>
    )
}

export default PostLikeCounter
