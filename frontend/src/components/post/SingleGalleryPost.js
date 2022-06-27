import styled from "styled-components"

// Components
import PostHeader from "./components/PostHeader"
import PostBody from "./components/PostBody"
import PostSingleGallery from "./components/PostSingleGallery"
import PostFooter from "./components/PostFooter"

const PostContainer = styled.div`
    padding: 30px;
`

function SingleGalleryPost() {

    return (
        <PostContainer>

            <PostHeader />
            <PostBody />
            <PostSingleGallery />
            <PostFooter />

        </PostContainer>
    )
}

export default SingleGalleryPost
