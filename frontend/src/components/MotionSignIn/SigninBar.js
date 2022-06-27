import {Navbar,LabelSignUp,SignUpButton} from '../../style/SignUpBarStyle.js'
import {Link , useNavigate} from 'react-router-dom';


const SignInBar = ()=> {
    const navigate = useNavigate();
    const goSignUp = () => {
        navigate("/")
    }

    return(
    <Navbar>
        <LabelSignUp>Already have an account?</LabelSignUp>
        <SignUpButton onClick={goSignUp}>SIGN IN</SignUpButton>
    </Navbar>

    )
}



export default SignInBar;