import NavigationBar from "../components/NavigationBar";
import { ProfilOverlayDiv } from "../style/ProfilOverlayDiv";
import { ProfilBackgroundDiv } from "../style/ProfilBackgroundDiv";
import { ProfilBackgroundImg } from "../style/ProfilBackgroundImg";
import { UpdateImgDiv, CamIcon } from "../style/ProfileOverlay3_2/UpdateImgDiv";
import { MainCenterDiv, LeftSide, ProfilePic_ButtonDiv, ProfilePic, UpdateImageButton, DeleteSaveDiv, DeleteAccountButton, SaveButton, RightSide,  ProfilPreciseInfo, FirstNameDiv, LabelFirstName, InputFirstName, EmailDiv, LabelEmail, InputEmail, LocationDiv, LabelLocation, InputLocation, AboutDiv, LabelAbout, InputAbout, ThingsLikedDiv, LikedParagraphDiv, ThingsLiked, LikedInputDiv, ProfilInfoLeftSide, ProfilInfoRightSide, LastNameDiv, LabelLastName, InputLastName, UsernameDiv, LabelUsername, InputUsername, PhoneDiv, LabelPhone, InputPhone, PasswordDiv, LabelPassword, InputPassword, LikedInput, AddButton, AddButtonDiv} from "../style/ProfileOverlay3_2/MainCenterDiv";
import BackGroundImg from "../assets/images/feedPics/backgroundProfil.png";
import cam from "../assets/images/camera.png";
import JenniferAvatar from "../assets/images/users/jennifer.png";
import { useNavigate } from "react-router-dom";

const ProfilOverlay3_2 = () => {

    const navigate = useNavigate();

    const toProfilPostsPage = () => {
        navigate("/profileposts");
    }

    return (
        
        <ProfilOverlayDiv>
            <NavigationBar/>
            <ProfilBackgroundDiv>
                <ProfilBackgroundImg src={BackGroundImg} alt="background image"/>
            </ProfilBackgroundDiv>
            <UpdateImgDiv>
                <CamIcon src={ cam } alt="camera"/>
                <p>Update image</p>
            </UpdateImgDiv>
            <MainCenterDiv>
                <LeftSide>
                    <ProfilePic_ButtonDiv>
                        <ProfilePic src={ JenniferAvatar } alt="your profile picture"/>
                        <UpdateImageButton>UPDATE IMAGE</UpdateImageButton>
                    </ProfilePic_ButtonDiv>
                    <DeleteSaveDiv>
                        <DeleteAccountButton>DELETE ACCOUNT</DeleteAccountButton>
                        <SaveButton onClick={toProfilPostsPage}>SAVE</SaveButton>
                    </DeleteSaveDiv>
                </LeftSide>
                <RightSide>
                    <ProfilPreciseInfo>
                        <ProfilInfoLeftSide>
                            <FirstNameDiv>
                                <LabelFirstName htmlFor="firstName">First name</LabelFirstName>
                                <InputFirstName id="firstName" placeholder="Jennifer"></InputFirstName>
                            </FirstNameDiv>
                                
                            <EmailDiv>
                                <LabelEmail htmlFor="email">Email</LabelEmail>
                                <InputEmail id="email" placeholder="jennifersmith@gmail.com"></InputEmail>
                            </EmailDiv>
                            
                            <LocationDiv>
                                <LabelLocation htmlFor="location">Location</LabelLocation>
                                <InputLocation id="location" placeholder="Zürich, Switzerland"></InputLocation>
                            </LocationDiv>
                            
                            <AboutDiv>
                                <LabelAbout htmlFor="about">About</LabelAbout>
                                <InputAbout id="about" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." ></InputAbout>
                            </AboutDiv>
                        </ProfilInfoLeftSide>
                        <ProfilInfoRightSide>
                            <LastNameDiv>
                                <LabelLastName htmlFor="lastName"> Last name</LabelLastName> 
                                <InputLastName id="lastName" placeholder="Smith" ></InputLastName>
                            </LastNameDiv>
                            <UsernameDiv>
                                <LabelUsername htmlFor="usermame" >Username</LabelUsername>
                                <InputUsername id="username" placeholder="jennifer.smith" ></InputUsername>
                            </UsernameDiv>
                            <PhoneDiv>
                                <LabelPhone htmlFor="phone" >Phone</LabelPhone>
                                <InputPhone id="phone" placeholder="123-456-7890" ></InputPhone>
                            </PhoneDiv>
                            <PasswordDiv>
                                <LabelPassword htmlFor="password" >Password</LabelPassword>
                                <InputPassword id="password" type="password"></InputPassword>
                            </PasswordDiv>
                        </ProfilInfoRightSide>
                    </ProfilPreciseInfo>
                    <ThingsLikedDiv>
                        <LikedParagraphDiv>
                            <p>Things I like</p>
                        </LikedParagraphDiv>
                        <ThingsLiked>
                                <button>Cooking x</button>
                                <button>Travel x</button>
                                <button>Reading x</button>
                                <button>Swimming x</button>
                                <button>Running x</button>
                        </ThingsLiked>
                        <LikedInputDiv>
                            <LikedInput placeholder="Type something..."></LikedInput>
                            <AddButtonDiv>
                                <AddButton>ADD</AddButton>
                            </AddButtonDiv> 
                        </LikedInputDiv>
                    </ThingsLikedDiv>
                </RightSide>
            </MainCenterDiv>
        </ProfilOverlayDiv>
        
    )
};

export default ProfilOverlay3_2;