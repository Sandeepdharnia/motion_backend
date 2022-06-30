import MotionLeftSideSignin from '../components/MotionSignIn/motionsigninleftside.js';
import SignUpBar from '../components/MotionSignIn/SignupBar.js';
import { MainContainer,SignInContainer,RightContainer,Header,Inputboxes,UsernameInput,PasswordnameInput,SigninbuttonBox,SigninButton} from '../style/signinStyle.js';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

//Curtis work

const Signin = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate= useNavigate();
    
    const updateEmail = (event) =>{
        setEmail(event.target.value);
    }
    const updatePassword = (event) =>{
        setPassword(event.target.value);
    }
    const login = (event) =>{
        event.preventDefault();
        const url = "https://motion.propulsion-learn.ch/app/api/auth/token/"
        const data = {
            email:email,
            password:password,
        };
        const fetchConfig = {
            method:"POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(data),
        };
        fetch(url,fetchConfig)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data.access === undefined) {
                alert("Please try again")
            }else{
                localStorage.setItem('token',data.access);
                navigate("/Posts")
            };
            
            
            
        });
        
        

    }

return(
    <MainContainer>
        <MotionLeftSideSignin/>
        <RightContainer>
            <SignUpBar/>
            <SignInContainer>
                <Header>Sign In</Header>
                <Inputboxes>
                    <UsernameInput onChange={updateEmail} placeholder="Email"/>
                    <PasswordnameInput onChange={updatePassword} type="password" placeholder="Password"/>
                </Inputboxes>
            </SignInContainer>
            <SigninbuttonBox>
                <SigninButton onClick={login}>SIGN IN</SigninButton>
            </SigninbuttonBox>
        




        </RightContainer>

    
    </MainContainer>
)
}




export default Signin;