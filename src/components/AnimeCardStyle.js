import styled from 'styled-components'


const AnimeCardStyle = styled.div`
    padding-top: 8rem;
    padding-left: 33rem;
    padding-right: 33rem;
    background-color: #0D0D0D;
    font-family: "Ubuntu", sans-serif;
    h1{
        display: inline-block;
        font-size: 17px;
        margin-bottom: .5rem;
        padding-left: 0.5rem;
        color: #fff;
        font-family: "Ubuntu", sans-serif;
        font-weight: Bold;
    }

    .trailer{
        padding-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        iframe{
            border: 0px solid #e5e7eb;
        }
    }

    .info{
        background-color: #141414;
        padding: 2rem;
        .about{
            display: grid;
            grid-template-columns: auto auto;
            img{
                height: 350px;
                object-fit: scale-down;
                border: 1px solid #8B8B8B;
                border-radius: 0px;
            }
        }
        .card{
            display: flex;
            flex-direction: column;
            padding-top: 1.5rem;
            line-height: 2rem;
            font-size: 13px;
            margin-right: 300px;
            p span:{
                font-style: italic;
                gap: 0.7rem;
            }
            p span:first-child{
                font-weight: 600;
                color: #767676;
            }
        }
        .description{
            margin-top: 1rem;
            color: #6c7983;
            line-height: 1.5rem;
            font-size: 13px;
            button{
                font-style: italic;
                background-color: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 0.7rem;
                color: #00D6E7;
                font-weight: 600;
            }
        }
    }

    .characters{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        grid-gap: 1rem;
        padding: 1rem;
        padding-top: 3rem;
        .character{
            padding: .4rem .6rem;
            transition: all .4s ease-in-out;
            img{
                width: 100%;
                outline: solid 1px #8B8B8B;
                outline-offset: -1px;
            }
            h4{
                padding: .5rem 0;
                color: #fff;
                font-size: 13px;
            }
            p{
                color: #767676;
                font-size: 13px;
            }
            &:hover{
                transform: translateY(-5px);
            }
        }
    }
`;
export default AnimeCardStyle;