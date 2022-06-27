import styled from "styled-components"

// Images
import LargeImage from "../../../assets/images/feedPics/large_image.png"


const GalleryContainer = styled.div`
    margin-top: 20px!important;

`


function PostSingleGallery() {

    return (
        <GalleryContainer>

            <img src={ LargeImage } alt="Feed Pic" />
   
        </GalleryContainer>
    )
}

export default PostSingleGallery 
