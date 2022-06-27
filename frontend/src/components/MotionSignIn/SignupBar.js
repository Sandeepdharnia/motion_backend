import {Navbar,LabelSignUp,SignUpButton} from '../../style/SignUpBarStyle.js'
import {Link , useNavigate} from 'react-router-dom';


const SignUpBar = ()=> {
    const navigate = useNavigate();
    const goSignUp = () => {
        navigate("/SignUpStep1")
    }

    return(
    <Navbar>
        <LabelSignUp>Don't have an account?</LabelSignUp>
        <SignUpButton onClick={goSignUp}>SIGN UP</SignUpButton>
    </Navbar>

    )
}



export default SignUpBar;