import styled from "styled-components"

// Images
import FeedPic1 from "../../../assets/images/feedPics/image1.png"
import FeedPic2 from "../../../assets/images/feedPics/image2.png"
import FeedPic3 from "../../../assets/images/feedPics/image3.png"
import FeedPic4 from "../../../assets/images/feedPics/image4.png"

const GalleryContainer = styled.div`
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-gap: 30px;

    margin-top: 20px!important;

    box-shadow: none!important;

`

function PostMultiGallery() {

    return (
        <GalleryContainer>

            <img src={ FeedPic1 } alt="Feed Pic" />
            <img src={ FeedPic2 } alt="Feed Pic" />
            <img src={ FeedPic3 } alt="Feed Pic" />
            <img src={ FeedPic4 } alt="Feed Pic" />
   
        </GalleryContainer>
    )
}

export default PostMultiGallery 
