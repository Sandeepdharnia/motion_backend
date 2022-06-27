import styled from "styled-components"

const Header = styled.div`
    display: grid;
    grid-column-gap: 14px;
    grid-template: 30px 0.1fr / 0.1fr 1fr;

    img {
        grid-column: 1;
        grid-row: 1 / 2;

        width: 46px;
    }

    h2 {
        grid-column: 2;
        grid-auto-flow: 1;

        font-size: 14px;
    }

    p {
        grid-column: 2;
        grid-row: 2;

        font-size: 14px;
    }

`

function PostHeader(props) {

    return (
        <Header>

            <img src={ props.userAvatar } alt="User Avatar" />
            <h2>{ props.userName }</h2>
            <p>6h ago</p>
            
        </Header>
    )
}

export default PostHeader
