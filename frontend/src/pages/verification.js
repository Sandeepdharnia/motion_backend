import MotionLeftSideSignin from '../components/MotionSignIn/motionsigninleftside.js';
import {MainContainer,RightContainer,SignUpBox,Header,InputVerification,InputTopBox,InputEmail,InputUserName,InputFirstName,InputLastName,InputPassword,InputPasswordRepeat,ButtonBox,Button,DotBox,Dots} from '../style/VerificationStyle.js';
import {useState} from 'react';
import {useNavigate} from 'react-router';

const Verification = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [userName,setUserName] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [password,setPassword] = useState("");
    const [passwordRepeat,setPasswordRepeat] = useState("");
    const [code,setCode] = useState("");
    const url = "https://motion.propulsion-learn.ch/app/api/auth/registration/validation/";

    const updateCode = (event) =>{
        setCode(event.target.value);
    }
    const updateEmail = (event) =>{
        setEmail(event.target.value);
    }
    const updateUserName = (event) =>{
        setUserName(event.target.value);
    }
    const updateFirstName = (event) =>{
        setFirstName(event.target.value);
    }
    const updateLastName = (event) =>{
        setLastName(event.target.value);
    }
    const updatePassword = (event) =>{
        setPassword(event.target.value);
    }
    const updatePasswordRepeat = (event) =>{
        setPasswordRepeat(event.target.value);
    }
    const completeRegistration = (event) => {
        event.preventDefault();
        const data = {
            email: email,
            username: userName,
            code:code,
            password:password,
            password_repeat:passwordRepeat,
            first_name:firstName,
            last_name:lastName
            
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
            console.log(response)
        return response.json();
        })
        navigate("/")
        
    }
    return(
    <MainContainer>
        <MotionLeftSideSignin/>
        <RightContainer>
            <SignUpBox>
                <Header>Verification</Header>
                <InputVerification onChange={updateCode} placeholder="Verification Code"></InputVerification>
                <InputTopBox>
                    <InputEmail onChange={updateEmail} placeholder="Email"></InputEmail>
                    <InputUserName onChange={updateUserName} placeholder="Username"></InputUserName>
                    <InputFirstName onChange={updateFirstName} placeholder="First Name"></InputFirstName>
                    <InputLastName onChange={updateLastName} placeholder="Last Name"></InputLastName>
                    <InputPassword onChange={updatePassword} type="password" placeholder="Password"></InputPassword>
                    <InputPasswordRepeat onChange={updatePasswordRepeat} type="password" placeholder="Password Repeat"></InputPasswordRepeat>
                </InputTopBox>
            </SignUpBox>
            <ButtonBox>
                <Button onClick={completeRegistration}>Complete</Button>
                <DotBox>
                    <Dots></Dots>
                    <Dots></Dots>
                    <Dots filled></Dots>
                </DotBox>

            </ButtonBox>


        </RightContainer>

    </MainContainer>
    )
}








export default Verification;