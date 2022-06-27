// Assets
import SearchIcon from "../../assets/svgs/search_icon.svg"
import PatriciaAvatar from "../../assets/images/users/patricia.png"
import AlbertAvatar from "../../assets/images/users/alber.png"
import JenniferAvatar from "../../assets/images/users/jennifer.png"
import LeticiaAvatar from "../../assets/images/users/leticia.png" 
// Components
import NormalPost from "../../components/post/NormalPost"
import SendPost from "../../components/post/SendPost"
import MultiGalleryPost from "../../components/post/MultiGalleryPost"
import EmbeddedPost from "../../components/post/EmbeddedPost"
import NavigationBar from "../../components/NavigationBar"
// Styles
import { MainContainer,  Header, PostsContainer,SearchIcons,Labels } from "../../style/PostPageStyle";
import {useEffect} from 'react';

function PostsPage() {
    
    return (
        <MainContainer>
            
            <NavigationBar />

            <Header>

                <label className="search-field">
                    <SearchIcons src={ SearchIcon } alt="Search Icon" />
                    <input type="text" placeholder="Search posts..."/>
                </label>

                <div>
                    <Labels>Liked</Labels>
                    <Labels>Friends</Labels>
                    <Labels>Follow</Labels>
                </div>

            </Header>

            <PostsContainer>

                <section className="send-post">
                    <SendPost />
                </section>

                <section className="feed-post-1" >
                    <NormalPost userName="Patricia Jindal" userAvatar={ PatriciaAvatar } />
                </section>

                <section className="last-user-post">
                    <MultiGalleryPost userName="Jennifer Smith" userAvatar={ JenniferAvatar } />
                </section>

                <section className="feed-post-2">
                    <NormalPost userName="Albert Lawrence" userAvatar={ AlbertAvatar }  embeddedPost={ <EmbeddedPost userName="Leticia Suárez" userAvatar={ LeticiaAvatar } /> } />
                </section>

            </PostsContainer>
            
        </MainContainer>
    )
}

export default PostsPage
