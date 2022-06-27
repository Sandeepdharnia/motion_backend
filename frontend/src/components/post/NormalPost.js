import styled from "styled-components"

// Components
import PostHeader from "./components/PostHeader"
import PostBody from "./components/PostBody"
import PostFooter from "./components/PostFooter"

const PostContainer = styled.div`
    padding: 30px;
`

function Post(props) {

    return (
        <PostContainer>

            <PostHeader userName={ props.userName } userAvatar={ props.userAvatar } />

            <PostBody />

            { props.embeddedPost }

            <PostFooter />

        </PostContainer>
    )
}

export default Post
