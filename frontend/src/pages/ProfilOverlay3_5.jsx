import NavigationBar from "../components/NavigationBar";
import { ProfilOverlayDiv } from "../style/ProfilOverlayDiv";
import { ProfilBackgroundDiv } from "../style/ProfilBackgroundDiv";
import { ProfilBackgroundImg } from "../style/ProfilBackgroundImg";
import { UpdateImgDiv, CamIcon } from "../style/ProfileOverlay3_2/UpdateImgDiv";
import { ProfileInfo } from "../style/ProfileOverlay3_4/ProfileInfo";
import { ProfilEditDiv } from "../style/ProfilEditDiv";
import { ProfilEditProfilPicDiv } from "../style/ProfilEditProfilPicDiv";
import { ProfilEditProfilPic } from "../style/ProfilEditProfilPic";
import { ProfilEditNameLocationDiv } from "../style/ProfilEditNameLocationDiv";
import { ProfilEditNameLocationFirstP } from "../style/ProfilEditNameLocationFirstP";
import { ProfilEditNameLocationSecondP } from "../style/ProfilEditNameLocationSecondP";
import { ProfileFollowFriendsDiv, FollowButton, FriendButton } from "../style/ProfileOverlay3_4/ProfileFollowFriendsDiv";
import { ProfilInfoAboutSocialDiv } from "../style/ProfilInfoAboutSocialDiv";
import { ProfilInfoAbout } from "../style/ProfilInfoAbout";
import { AboutLeftSideDiv } from "../style/AboutLeftSideDiv";
import { ProfileInfoAboutSpecification } from "../style/ProfileOverlay3_5/ProfileInfoAboutSpecification";
import { AboutRightSideDiv } from "../style/ProfileOverlay3_5/AboutRightSideDiv";
import { ThingsParagraphDiv } from '../style/ProfileOverlay3_5/AboutRightSideDiv';
import { ThingsLiked } from '../style/ProfileOverlay3_5/AboutRightSideDiv';
import { ProfilInfoSocialNums, FirstParagraph, PostsDiv, LikesDiv, FriendsDiv, FollowersDiv, FollowingDiv } from '../style/ProfileOverlay3_5/ProfilInfoSocialNums';
import { BottomContactDiv } from "../style/ProfileOverlay3_4/BottomContactDiv";
import cam from "../assets/images/camera.png";
import FriendCartFollowedNotFriend from "../components/FindFriends/FriendCardFollowedNotFriend";
import FriendCartFollowed from "../components/FindFriends/FriendCardFollowed";
import AlbertAvatar from "../assets/images/users/alber.png";
import MaxAvatar from "../assets/images/users/max.png";
import LeticiaAvatar from "../assets/images/users/leticia.png";
import PatriciaAvatar from "../assets/images/users/patricia.png"
import BackGroundImg from "../assets/images/feedPics/backgroundProfil.png";
import { useNavigate } from "react-router-dom";

const ProfilOverlay3_5 = () => {

    const navigate = useNavigate();

    const toPosts = () => {
        navigate("/userposts");
    }

    const toFriends = () => {
        navigate("/userfriends");
    }

    return (
        <ProfilOverlayDiv>
            <NavigationBar/>
            <ProfilBackgroundDiv>
                <ProfilBackgroundImg src={BackGroundImg} alt="your background image"/>
            </ProfilBackgroundDiv>
            <UpdateImgDiv>
                <CamIcon src={ cam } alt="camera"/>
                <p>Update image</p>
            </UpdateImgDiv>
        <ProfileInfo>
            <ProfilEditDiv>
                <ProfilEditProfilPicDiv>
                    <ProfilEditProfilPic src={AlbertAvatar} alt="your profil picture"/>
                </ProfilEditProfilPicDiv>
                <ProfilEditNameLocationDiv>
                    <ProfilEditNameLocationFirstP>Albert Laurence</ProfilEditNameLocationFirstP>
                    <ProfilEditNameLocationSecondP>Zürich, Switzerland</ProfilEditNameLocationSecondP>
                </ProfilEditNameLocationDiv>
                <ProfileFollowFriendsDiv>
                    <FollowButton>FOLLOW</FollowButton>
                    <FriendButton>ADD FRIEND</FriendButton>
                </ProfileFollowFriendsDiv>
            </ProfilEditDiv>
            <ProfilInfoAboutSocialDiv>
                <ProfilInfoAbout>    
                <AboutLeftSideDiv>
                    <ProfileInfoAboutSpecification>
                        <p>About</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labr. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </ProfileInfoAboutSpecification>
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
                    <PostsDiv onClick={toPosts}>
                        <FirstParagraph>34</FirstParagraph>
                        <p>Posts</p>
                    </PostsDiv>
                    <LikesDiv>  
                        <FirstParagraph>256</FirstParagraph>
                        <p>Likes</p>
                    </LikesDiv>
                    <FriendsDiv onClick={toFriends}>
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
        </ProfileInfo>
        <BottomContactDiv>
                <FriendCartFollowedNotFriend userName="Max Martinez" userAvatar={ MaxAvatar } location="Leon, France" />
                <FriendCartFollowed userName="Leticia Suárez" userAvatar={ LeticiaAvatar } location="Rome, Italy" />
                <FriendCartFollowed userName="Patricia Jindal" userAvatar={ PatriciaAvatar } location="Munich, Germany" />
            </BottomContactDiv>
    </ProfilOverlayDiv>
    )
}

export default ProfilOverlay3_5;