// Style
import { FriendCartContainer } from "../../style/FriendCardStyle";
import { useState } from "react";
import { CheckImg } from "../../style/FriendCartStyle/CheckImg";
import Check from "../../assets/images/CheckFriend.png";

function FriendCartAddedFriends(props) {

    const [text, setText] = useState('Friend');
    const [clickedAdd, setClickedAdd] = useState(true);
    const [textFollow, setTextFollow] = useState('Follow');
    const [clickedFollow, setClickedFollow] = useState(false);

    const addFriend = () => {
        if(clickedAdd) {
            setText('Add Friend');
            <CheckImg></CheckImg>
            setClickedAdd(false);
        } else if (!clickedAdd) {
            setText('Friend');
            setClickedAdd(true);
        }
    }

    const follow = () => {
        if(!clickedFollow) {
            setTextFollow('Following');
            setClickedFollow(true);
        } else if (clickedFollow) {
            setTextFollow('Follow');
            setClickedFollow(false);
        }
    }

    return (

        <FriendCartContainer>

            <img className="user-avatar" src={ props.userAvatar } alt="User Avatar" />
            <h2 className="user-name">{ props.userName }</h2>
            <p className="location">{ props.location }</p>

            <section className="buttons">
                <button onClick={follow}>{textFollow}</button>
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

export default FriendCartAddedFriends;
