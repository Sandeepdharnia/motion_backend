import motionLogo from '../../assets/images/logo_white.png';
import AppleLogoimp from '../../assets/svgs/apple.svg';
import GoogleLogoimp from '../../assets/svgs/google.svg';
import TwitterLogoimp from '../../assets/svgs/twitter_icon.svg';
import FacebookLogoimp from '../../assets/svgs/facebook_icon.svg';
import InstaLogoimp from '../../assets/svgs/instagram_icon.svg';
import {Container,MotionLogo,Image,Header,Paragraph,Paragraph2,AppleGoogleLogoBox,ButtonApple,ButtonGoogle,AppleLogo,GoogleLogo,TwitterFBInstaBox,TwitterFBInstaImages,Footer,Paragraph3} from '../../style/motionleftsideStyling.js';






const MotionLeftSideSignin = () => {
    // const goToApple = () => {
    
    // }
return (
    
    
    <Container>
        <MotionLogo>
            <Image src={motionLogo} alt="logo"/>
            <Header>Motion</Header>
            <Paragraph>Connect with friends and the world</Paragraph><Paragraph2>around you with Motion.</Paragraph2>
        </MotionLogo>
        <AppleGoogleLogoBox>
            <form action="https://www.apple.com/app-store/" target="_blank">
            <ButtonApple type="submit"><AppleLogo src={AppleLogoimp}/></ButtonApple>
            </form>
            <form action="https://play.google.com/store/games?utm_source=emea_Med&utm_medium=hasem&utm_content=Oct2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-ch-1001280-Med-hasem-py-Evergreen-Oct2020-Text_Search_BKWS%7CONSEM_kwid_43700007739247421&referrer=gclid%3DCj0KCQjw4uaUBhC8ARIsANUuDjXPRy-KAYtlY1TlCOXFp8qFfozUvOcb5xKaJWnlJXdfsQyluS0SkBIaAlcBEALw_wcB&gref=EkUKPQoJCPDi5pQGELwBEiwA1S4ONc9HL4oBi2VjVOUI5cWnyoV-jNS85xvnEpolaeUld1-xDKW5LRKQEhoCVwEQAvD_BwEY4_bcmgM&gclid=Cj0KCQjw4uaUBhC8ARIsANUuDjXPRy-KAYtlY1TlCOXFp8qFfozUvOcb5xKaJWnlJXdfsQyluS0SkBIaAlcBEALw_wcB&gclsrc=aw.ds" target="_blank">
            <ButtonGoogle><GoogleLogo src={GoogleLogoimp}/></ButtonGoogle>
            </form>
        </AppleGoogleLogoBox>
        <TwitterFBInstaBox>
                <a href="https://twitter.com" target="_blank">
                <TwitterFBInstaImages src={TwitterLogoimp}/>
                </a>
                <a href="https://facebook.com" target="_blank">
                <TwitterFBInstaImages src={FacebookLogoimp}/>
                </a>
                <a href="https://instagram.com" target="_blank">
                <TwitterFBInstaImages src={InstaLogoimp}/>
                </a>
            </TwitterFBInstaBox>
        <Footer>
            <Paragraph3>© Motion 2018. All rights reserved</Paragraph3>
        </Footer>
    </Container>
    
)
}










export default MotionLeftSideSignin;