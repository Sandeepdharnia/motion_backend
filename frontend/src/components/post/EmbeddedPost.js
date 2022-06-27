import styled from "styled-components"

// Components
import PostHeader from "./components/PostHeader"
import PostBody from "./components/PostBody"
import PostSingleGallery from "./components/PostSingleGallery"


const PostContainer = styled.div`
    margin-top: 28px!important;
    padding: 0 30px;

    border-left: 2px solid rgba(0, 0, 0, 0.1);
`

function EmbeddedPost(props) {

    return (
        <PostContainer>

            <PostHeader userName={ props.userName } userAvatar={ props.userAvatar } />
            <PostBody />
            <PostSingleGallery />

        </PostContainer>
    )
}

export default EmbeddedPost
