// Style
import { FriendsContainer } from "../../style/FindFriendsStylePage"
// Assets
import AlbertAvatar from "../../assets/images/users/alber.png"
import LeticiaAvatar from "../../assets/images/users/leticia.png"
import PatriciaAvatar from "../../assets/images/users/patricia.png"
import FrankAvatar from "../../assets/images/users/frank.png"
import ThomasAvatar from "../../assets/images/users/thomas.png"
import MaxAvatar from "../../assets/images/users/max.png"
// Components
import FriendCart from "../../components/FindFriends/FriendCard"
import NavigationBar from "../../components/NavigationBar"

function FindFriends() {
    return (

        <main>

            <NavigationBar />

            <FriendsContainer>

                <FriendCart userName="Albert Lawrence" userAvatar={ AlbertAvatar } location="Zürich. Switzerland" />
                <FriendCart userName="Leticia Suárez" userAvatar={ LeticiaAvatar } location="Rome, Italy" />
                <FriendCart userName="Patricia Jindal" userAvatar={ PatriciaAvatar } location="Munich, Germany" />
                <FriendCart userName="Frank Baker" userAvatar={ FrankAvatar } location="Los Angeles, USA" />
                <FriendCart userName="Thomas Castro" userAvatar={ ThomasAvatar } location="Bacelona, Spain" />
                <FriendCart userName="Max Martinez" userAvatar={ MaxAvatar } location="Leon, France" />

            </FriendsContainer>

        </main>
    )
}

export default FindFriends
