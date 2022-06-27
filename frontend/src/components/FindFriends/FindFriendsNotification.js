// Styles
import { MainContainer, ReceivedRequestContainer, SentRequestContainer } from "../../style/FindFriendsNotificationStyle"
// Assets
import ClockIcon from "../../assets/images/notifications-icons/clock-icon.png"
import CrossIcon from "../../assets/images/notifications-icons/cross-icon.png"
import HookIcon from "../../assets/images/notifications-icons/hook-icon.png"
import LeticiaAvatar from "../../assets/images/users/leticia.png"
import ThomasAvatar from "../../assets/images/users/thomas.png"
import MaxAvatar from "../../assets/images/users/max.png"
import FrankAvatar from "../../assets/images/users/frank.png"

function FindFriendsNotification() {

    return (
        <MainContainer>

            <ReceivedRequestContainer>

                <h3>Received Requests</h3>

                <div className="received-container">
                    <img src={ LeticiaAvatar } alt="User Avatar" />
                    <p className="user-name">Leticia Suárez</p>
                    <p className="location">Rome, Italy</p>

                    <button className="accept-request">
                        <img className="accept-request-icon" src={ HookIcon } alt="Hook Icon" />
                    </button>

                    <button className="deny-request">
                        <img className="deny-request-icon" src={ CrossIcon } alt="Cross Icon" />
                    </button>
                </div>

                <div className="received-container">
                    <img src={ ThomasAvatar } alt="User Avatar" />
                    <p className="user-name">Thomas Castro</p>
                    <p className="location">Bacelona, Spain</p>
                    
                    <button className="accept-request">
                        <img className="accept-request-icon" src={ HookIcon } alt="Hook Icon" />
                    </button>
                    
                    <button className="deny-request">
                        <img className="deny-request-icon" src={ CrossIcon } alt="Cross Icon" />
                    </button>
                </div>

            </ReceivedRequestContainer>

            <SentRequestContainer>

                <h3>Sent request</h3>

                <div className="sent-container">
                    <img src={ MaxAvatar } alt="User Avatar" />
                    <p className="user-name">Max Martinez</p>
                    <p className="location">Leon, France</p>

                    <div className="pending">
                        <img src={ ClockIcon } alt="Clock Icon" />
                    </div>
                </div>

                <div className="sent-container">
                    <img src={ FrankAvatar } alt="User Avatar" />
                    <p className="user-name">Max Martinez</p>
                    <p className="location">Leon, France</p>

                    <div className="pending">
                        <img src={ ClockIcon } alt="Clock Icon" />
                    </div>
                </div>

            </SentRequestContainer>
            

        </MainContainer>
    )
}

export default FindFriendsNotification
