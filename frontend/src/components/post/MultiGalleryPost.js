import styled from "styled-components"

// Components
import PostHeader from "./components/PostHeader"
import PostBody from "./components/PostBody"
import PostMultiGallery from "./components/PostMultiGallery"
import PostFooter from "./components/PostFooter"

const PostContainer = styled.div`
    padding: 30px;
`

function GalleryPost(props) {

    return (
        <PostContainer>

            <PostHeader userName={ props.userName } userAvatar={ props.userAvatar } />
            <PostBody />
            <PostMultiGallery />
            <PostFooter />

        </PostContainer>
    )
}

export default GalleryPost
