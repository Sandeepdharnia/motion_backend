import React from "react";
import { ProfilOverlayHeader } from "../../style/ProfilOverlayHeader";
import { NavigationBarLogoDiv } from "../../style/NavigationBarLogoDiv";
import { NavigationBarLogo } from "../../style/NavigationBarLogo";
import { NavigationBarTitle } from "../../style/NavigationBarTitle";
import { Post_FriendsDiv } from "../../style/Post_FriendsDiv";
import { Post_FriendsDivPosts } from "../../style/Post_FriendsDivPosts";
import { Post_FriendsDivPostsImg } from "../../style/Post_FriendsDivPostsImg";
import { Post_FriendsDivFriendsImg } from "../../style/Post_FriendsDivFriendsImg";
import { Notif_ProfilPic_SettingsDiv } from "../../style/Notif_ProfilPic_SettingsDiv";
import { NotificationBell } from "../../style/NotificationBell";
import { NavigationBarProfilPic } from "../../style/NavigationBarProfilPic";
import { NavigationBarSettings } from "../../style/NavigationBarSettings";
import logo from "../../assets/images/logo.png";
import postsImg from "../../assets/images/posts_logo.png";
import friendsImg from "../../assets/svgs/icon-friends.svg";
import notificationBellImg from "../../assets/svgs/notification_bell.svg";
import profilPic from "../../assets/images/users/jennifer.png";
import settings from "../../assets/svgs/menu.svg";
import {useNavigate} from "react-router";
import {Clickables} from "../../style/NavigationBarLogo.js";
import { ProfilPopUpDiv, TopDiv, ProfileIcon, ProfilParagraph, BottomDiv, LogOutIcon, LogOutParagraph } from '../../style/ProfilPopUpDiv';
import ProfilePopUpIcon from "../../assets/images/ProfilePopIcon.png";
import LogoutIcon from "../../assets/images/LogoutPopIcon.png";
import FindFriendsNotification from "../FindFriends/FindFriendsNotification";


const NavigationBar = () => {
    const navigate = useNavigate();
    const toFriendsPage = () => {
        navigate("/FindFriends");
    }
    const toSignInPage = () =>{
        navigate("/");
    }
    const toPostsPage = () =>{
        navigate("/Posts");
    }
    
    const logOut = () => {
        localStorage.removeItem('token');
        navigate("/")
        
    }

    const toProfile = () => {
        navigate("/profileposts");
    }

    const toggleProfilePopUp = () => {
        const popUp = document.querySelector(".profile-popup")
        const popUpDisplay = window.getComputedStyle( popUp, null ).display

        if (popUpDisplay === "flex") {
            popUp.style.display = "none"
        } else {
            popUp.style.display = "flex"
        }
    }

    const toggleNotificationPopUp  = () => {
        const popUp = document.querySelector(".notification-popup")
        const popUpDisplay = window.getComputedStyle( popUp , null ).display

        if (popUpDisplay === "block") {
            popUp.style.display = "none"
        } else {
            popUp.style.display = "block"
        }
    }


    return (
        <ProfilOverlayHeader>
            <NavigationBarLogoDiv>
                <NavigationBarLogo src={logo} alt="logo"/>
                <NavigationBarTitle onClick={toSignInPage}>Motion</NavigationBarTitle>
            </NavigationBarLogoDiv>
            <Post_FriendsDiv>
                <Post_FriendsDivPosts>
                    <Post_FriendsDivPostsImg src={postsImg} alt="posts"/>
                    <Clickables onClick={toPostsPage}>Posts</Clickables>
                </Post_FriendsDivPosts>
                <Post_FriendsDivFriendsImg src={friendsImg} alt="friends"/>
                <Clickables onClick={toFriendsPage}>Find Friends</Clickables>
            </Post_FriendsDiv>
            <Notif_ProfilPic_SettingsDiv>
                <NotificationBell onClick={ toggleNotificationPopUp } src={notificationBellImg} alt="your notifications"/>
                <div className="notification-popup" style={{ display: "none" }}>
                    <FindFriendsNotification  />
                </div>

                <NavigationBarProfilPic onClick={ toggleProfilePopUp } src={profilPic} alt="your profil picture"/>
                <ProfilPopUpDiv className="profile-popup">
                <TopDiv onClick={toProfile}>
                    <ProfileIcon src={ ProfilePopUpIcon } alt="profile icon"/>
                    <ProfilParagraph>Profile</ProfilParagraph>
                </TopDiv>
                <BottomDiv onClick={logOut}>
                    <LogOutIcon src={ LogoutIcon } alt="profile icon"/>
                    <LogOutParagraph>Logout</LogOutParagraph>
                </BottomDiv>
            </ProfilPopUpDiv>
                <NavigationBarSettings src={ settings } alt="settings"/>
            </Notif_ProfilPic_SettingsDiv>
        </ProfilOverlayHeader>
    )
}

export default NavigationBar;