import styled from 'styled-components'

//  css стилізація для Favorite категорії
const FavoriteStyle = styled.div`
    display: flex;
    .favorite{
        margin-top: 2rem;
        padding-top: 0rem;
        padding-bottom: 8rem;
        padding-left: 25rem;
        padding-right: 25rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
        grid-template-rows: repeat(auto-fill, minmax(310px, 1fr));
        grid-row-gap: 4rem;
        grid-column-gap: 1rem;
        font-weight: 400;
        background-color: #0D0D0D;
        a{
            height: 340px;
            border-radius: 0px;
            border: 1px solid #8B8B8B;
        }
        a img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0px;
        }
        p {
            text-align: center;
            font-size: 14px;
            padding-top: 5px;
            color: white;
            font-family: "Ubuntu", sans-serif;
        }
    }
`;
export default FavoriteStyle;
// grid-template-areas: "a b c d e f g";
// grid-auto-columns: 300px;
// grid-auto-rows: 400px;