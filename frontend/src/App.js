import './App.css';
import SignIn from './pages/signin.js';
import SignUpStep1 from './pages/signup-step1.js'
import {Route,Routes} from 'react-router-dom';
import SignUpStep2 from './pages/signup-step2.js'
import Verification from './pages/verification.js'
import Posts from './pages/posts-pages/PostsPage.js'
import FindFriends from './pages/find-friends-pages/FindFriendsPage.js'
import RequireAuth from './components/Auth/RequireAuth.js'
import ProfilOverlay3_1 from "./pages/ProfilOverlay3_1";
import ProfilOverlay3_2 from "./pages/ProfilOverlay3_2";
import ProfilOverlay3_3 from "./pages/ProfilOverlay3_3";
import ProfilOverlay3_4 from './pages/ProfilOverlay3_4';
import ProfilOverlay3_5 from './pages/ProfilOverlay3_5';


function App() {
  return (
  <Routes>
    <Route path="/" element={<SignIn/>} />
    <Route path="/signupstep1" element={<SignUpStep1/>} />
    <Route path="/signupstep2" element={<SignUpStep2/>} />
    <Route path="/verification" element={<Verification/>} />
    <Route path="/posts" element={<RequireAuth><Posts/></RequireAuth>} />
    <Route path="/findfriends" element={<RequireAuth><FindFriends/></RequireAuth>} />
    <Route path="/profileposts" element={ <RequireAuth><ProfilOverlay3_1/></RequireAuth>}/>
    <Route path="/profileedit" element={<RequireAuth><ProfilOverlay3_2/></RequireAuth>} />
    <Route path="/userposts" element= {<RequireAuth><ProfilOverlay3_3/></RequireAuth>} />
    <Route path="/userfriends" element= { <RequireAuth><ProfilOverlay3_4 /></RequireAuth>} />
    <Route path="/userfollowing" element= { <RequireAuth><ProfilOverlay3_5/></RequireAuth>} />
  </Routes> 

  )
}

export default App;
