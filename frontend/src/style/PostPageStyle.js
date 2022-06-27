import styled from "styled-components"

export const MainContainer = styled.div`
width: 100vw;
min-width: 1200px;

background-color: #F8F8F9;

* {
    box-sizing: border-box;

}
`
export const Labels = styled.label`
cursor: pointer;
`
export const SearchIcons =styled.img`
cursor:pointer;
`

export const Header = styled.header`
    display: flex;
    align-items: center;

    position: relative;
    width: 100%;
    height: 80px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    .search-field {
        display: flex;
        gap: 28px;

        margin-left: 148px;

        input {
            border: none;

            background-color: #F8F8F9;

            font-size: 16px;
        }
    }

    div {
        display: flex;
        gap: 42px;

        position: absolute; // Responsive
        right: 100px;
    }
`

export const PostsContainer = styled.section`
    display: grid;
    grid-template: 120px 78px 1fr / 570px 570px;
    gap: 32px;
    justify-content: center;

    padding: 40.5px 144px;

    section {

        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        background-color: white;
    }

    .send-post {
        grid-row: 1;
        grid-column: 1;
    }

    .feed-post-1 {
        grid-row: 1 / 3;
        grid-column: 2;
    }

    .last-user-post {
        grid-row: 2 / 4;
        grid-column: 1;
    }

    .feed-post-2 {
        grid-row: 3 / 4;
        grid-column: 2;
    }
`