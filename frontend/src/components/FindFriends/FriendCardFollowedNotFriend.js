// Style
import { FriendCartContainer } from "../../style/FriendCardStyle";
import { useState } from "react";
import { CheckImg } from "../../style/FriendCartStyle/CheckImg";
import Check from "../../assets/images/CheckFriend.png";
import { FollowingButton } from "../../style/ProfileOverlay3_5/FollowingButton";

function FriendCartFollowedNotFriend(props) {

    const [text, setText] = useState('Friend');
    const [clickedAdd, setClickedAdd] = useState(false);
    const [textFollow, setTextFollow] = useState('Following');
    const [clickedFollow, setClickedFollow] = useState(false);

    const addFriend = () => {
        if(!clickedAdd) {
            setText('Friend');
            <CheckImg></CheckImg>
            setClickedAdd(true);
        } else if (clickedAdd) {
            setText('Add Friend');
            setClickedAdd(false);
        }
    }

    const follow = () => {
        if(!clickedFollow) {
            setTextFollow('Follow');
            setClickedFollow(true);
        } else if (clickedFollow) {
            setTextFollow('Following');
            setClickedFollow(false);
        }
    }

    return (

        <FriendCartContainer>

            <img className="user-avatar" src={ props.userAvatar } alt="User Avatar" />
            <h2 className="user-name">{ props.userName }</h2>
            <p className="location">{ props.location }</p>

            <section className="buttons">
                <FollowingButton onClick={follow}>{textFollow}</FollowingButton>
                <button onClick={addFriend}>{clickedAdd && <CheckImg src={Check} />}{text}</button>
            </section>

            <p className="biography">Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian</p>

            <section className="hobby-tags">

                <div className="tag">Cooking</div>
                <div className="tag">Travel</div>
                <div className="tag">Reading</div>
                <div className="tag">Swimming</div>
                <div className="tag">Swimming</div>

            </section>

        </FriendCartContainer>
    )
}

export default FriendCartFollowedNotFriend;
