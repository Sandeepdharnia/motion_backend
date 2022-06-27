import MotionLeftSideSignin from '../components/MotionSignIn/motionsigninleftside.js';
import Oval from '../assets/images/Oval.png';
import Check from '../assets/images/Shape.png';
import {SignUpButton,DotBox,Dots} from '../style/signup-step1.js'
import {MainContainer,RightContainer,SignUpBox,Header,CircleImage,TickImage,CircleBox,Paragraph,SignUpButtonBox} from '../style/signinStep2.js'
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


const SignupStep2 = () => {
    const email = useSelector(state => state.email);
    const navigate = useNavigate();
    const nextPage = () => {
        navigate('/Verification');
    }
    return(
    <MainContainer>
        <MotionLeftSideSignin/>
        <RightContainer>
            <SignUpBox>
            <Header>Congratulations!</Header>
                <CircleBox>
                    <TickImage src={Check}/>
                    <CircleImage src={Oval}/>
                </CircleBox>
                <Paragraph>We've sent a confirmation code to your email</Paragraph><Paragraph>{email}</Paragraph>
            </SignUpBox>
            <SignUpButtonBox>
            <SignUpButton onClick={nextPage}>Continue</SignUpButton>
                <DotBox>
                    <Dots></Dots>
                    <Dots filled></Dots>
                    <Dots></Dots>
            </DotBox>
            </SignUpButtonBox>
        </RightContainer>
    </MainContainer>
    )

}



export default SignupStep2;