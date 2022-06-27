import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { ProfilOverlayDiv } from '../style/ProfilOverlayDiv';
import { ProfilBackgroundDiv} from '../style/ProfilBackgroundDiv';
import { ProfilBackgroundImg } from '../style/ProfilBackgroundImg';

import { ProfilInfo } from '../style/ProfilInfo';
import { ProfilEditDiv } from '../style/ProfilEditDiv';
import { ProfilEditProfilPicDiv } from '../style/ProfilEditProfilPicDiv';
import { ProfilEditProfilPic } from '../style/ProfilEditProfilPic';
import { ProfilEditNameLocationDiv } from '../style/ProfilEditNameLocationDiv';
import { ProfilEditNameLocationFirstP } from '../style/ProfilEditNameLocationFirstP';
import { ProfilEditNameLocationSecondP } from '../style/ProfilEditNameLocationSecondP';
import { ProfilEditButtonDiv } from '../style/ProfilEditButtonDiv';
import { ProfilEditButton } from '../style/ProfilEditButton';
import { ProfilInfoAboutSocialDiv } from '../style/ProfilInfoAboutSocialDiv';
import { ProfilInfoAbout } from '../style/ProfilInfoAbout';
import { AboutLeftSideDiv } from '../style/AboutLeftSideDiv';
import { AboutRightSideDiv } from '../style/AboutRightSideDiv';
import { ProfilInfoAboutSpecification } from '../style/ProfilInfoAboutSpecification';
import { ProfilInfoAboutEmailPhone } from '../style/ProfilInfoAboutEmailPhone';
import { ProfilInfoAboutEmail } from '../style/ProfilInfoAboutEmail';
import { ProfilInfoAboutPhone } from '../style/ProfilInfoAboutPhone';
import { ThingsParagraphDiv } from '../style/ThingsParagraphDiv';
import { ThingsLiked } from '../style/ThingsLiked';
import { ProfilInfoSocialNums, FirstParagraph, PostsDiv, LikesDiv, FriendsDiv, FollowersDiv, FollowingDiv } from '../style/ProfileOverlay3_1/ProfilInfoSocialNums';
import { UserPostsDiv, LeftSide, RightSide } from '../style/UserPosts';
import BackGroundImg from "../assets/images/feedPics/backgroundProfil.png";
import ProfilPic from "../assets/images/users/jennifer.png";
import JenniferAvatar from "../assets/images/users/jennifer.png";
import LeticiaAvatar from "../assets/images/users/leticia.png" 
import MultiGalleryPost from "../components/post/MultiGalleryPost";
import NormalPost from "../components/post/NormalPost";
import EmbeddedPost from "../components/post/EmbeddedPost";

import { useNavigate } from "react-router-dom";


const ProfilOverlay = () => {
    
    const navigate = useNavigate();

    const toProfileEditPage = () => {
        navigate("/profileedit");
    }

    return (
        <ProfilOverlayDiv>
            <NavigationBar/>
            <ProfilBackgroundDiv>
                <ProfilBackgroundImg src={BackGroundImg} alt="background image"/>
            </ProfilBackgroundDiv>
            <ProfilInfo>
                <ProfilEditDiv>
                    <ProfilEditProfilPicDiv>
                        <ProfilEditProfilPic src={ProfilPic} alt="your profil picture"/>
                    </ProfilEditProfilPicDiv>
                    <ProfilEditNameLocationDiv>
                        <ProfilEditNameLocationFirstP>Jennifer Smith</ProfilEditNameLocationFirstP>
                        <ProfilEditNameLocationSecondP>Zürich, Switzerland</ProfilEditNameLocationSecondP>
                    </ProfilEditNameLocationDiv>
                    <ProfilEditButtonDiv>
                       <ProfilEditButton onClick={toProfileEditPage}>EDIT PROFILE</ProfilEditButton>
                    </ProfilEditButtonDiv>
                </ProfilEditDiv>
                <ProfilInfoAboutSocialDiv>
                    <ProfilInfoAbout>    
                        <AboutLeftSideDiv>
                        <ProfilInfoAboutSpecification>
                            <p>About</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </ProfilInfoAboutSpecification>
                        <ProfilInfoAboutEmailPhone>
                            <ProfilInfoAboutEmail>
                                <p>Email</p>
                                <p>jennifersmith@gmail.com</p>
                            </ProfilInfoAboutEmail>
                            <ProfilInfoAboutPhone>
                                <p>Phone</p>
                                <p>123-456-7890</p>
                            </ProfilInfoAboutPhone>
                        </ProfilInfoAboutEmailPhone> 
                        </AboutLeftSideDiv>  
                        <AboutRightSideDiv>
                            <ThingsParagraphDiv>
                                <p>Things I like</p>
                            </ThingsParagraphDiv>
                            <ThingsLiked>
                                <button>Cooking</button>
                                <button>Travel</button>
                                <button>Reading</button>
                                <button>Swimming</button>
                                <button>Running</button>
                            </ThingsLiked>
                        </AboutRightSideDiv>
                    </ProfilInfoAbout>
                    
                    <ProfilInfoSocialNums>
                        <PostsDiv>
                           <FirstParagraph>34</FirstParagraph>
                           <p>Posts</p>
                        </PostsDiv>
                        <LikesDiv>  
                            <FirstParagraph>256</FirstParagraph>
                            <p>Likes</p>
                        </LikesDiv>
                        <FriendsDiv>
                            <FirstParagraph>98</FirstParagraph>
                            <p>Friends</p>
                        </FriendsDiv>
                        <FollowersDiv>
                            <FirstParagraph>129</FirstParagraph>
                            <p>Followers</p>
                        </FollowersDiv>
                        <FollowingDiv>
                            <FirstParagraph>154</FirstParagraph>
                            <p>Following</p>
                        </FollowingDiv>
                    </ProfilInfoSocialNums>
                </ProfilInfoAboutSocialDiv>
            </ProfilInfo>
            <UserPostsDiv>
                <LeftSide>
                    <MultiGalleryPost userName="Jennifer Smith" userAvatar={ JenniferAvatar }/>
                </LeftSide>
                <RightSide>
                <NormalPost userName="Jennifer Smith" userAvatar={ JenniferAvatar }  embeddedPost={ <EmbeddedPost userName="Leticia Suárez" userAvatar={ LeticiaAvatar } /> } />
                </RightSide>
            </UserPostsDiv>
        </ProfilOverlayDiv>
    )
} 

export default ProfilOverlay;