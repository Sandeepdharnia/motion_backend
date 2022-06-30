import MotionLeftSideSignin from '../components/MotionSignIn/motionsigninleftside.js';
import SignInBar from '../components/MotionSignIn/SigninBar.js';
import {Header} from '../style/signinStyle.js'
import {Container,RightContainer,SignUpContainer,Inputboxes,EmailInput,SignUpButtonBox,SignUpButton,DotBox,Dots} from '../style/signup-step1.js'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const SignUpStep1 = () => {
const navigate = useNavigate();
const [email,setEmail] = useState("");
const dispatch = useDispatch();
const url = "https://motion.propulsion-learn.ch/app/api/auth/registration/";

const updateEmail = (event) => {
    setEmail(event.target.value);
}
const sendVerificationCode = (event) => {
    event.preventDefault();
    if (email.length > 0) {
    const data = {
        email: email
    };
    const fetchConfig = {
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        body: JSON.stringify(data),
    };
    fetch(url,fetchConfig)
    .then((response) => {
    return response.json();
    })
    const action = {
        type:"setEmail",
        payload:email
    };
    dispatch(action)
    navigate("/SignUpStep2")
}else{
    alert("please enter email address");
}

}




    return(
    <Container>
        <MotionLeftSideSignin/>
        <RightContainer>
            <SignInBar/>
            <SignUpContainer>
                <Header>Sign Up</Header>
                <Inputboxes>
                    <EmailInput onChange={updateEmail} placeholder="joebloggs@email.com"/>
                </Inputboxes>
            </SignUpContainer>
            <SignUpButtonBox>
                <SignUpButton onClick={sendVerificationCode}>Continue</SignUpButton>
                <DotBox>
                    <Dots filled></Dots>
                    <Dots></Dots>
                    <Dots></Dots>
            </DotBox>
            </SignUpButtonBox>
        </RightContainer>
    </Container>
    )
}















export default SignUpStep1;