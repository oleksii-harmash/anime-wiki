import styled from 'styled-components'

const MainStyle = styled.div`
    header{
        padding: 2rem 5rem;
        width: 50%;
        color: white;
        text-transform: uppercase;
        margin: 0 auto;
        font-size: 12px;
        transition: all .4s ease-in-out;
        @media screen and (max-width:1530px){
            width: 95%;
        }
        .search{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            button{
                display: flex;
                align-items: center;
                gap: .5rem;
                padding: .7rem 1.5rem;
                outline: none;
                border-radius: 8px;
                color: #fff;
                font-size: 13px;
                background-color: #1B1B1B;
                cursor: pointer;
                transition: all .4s ease-in-out;
                font-family: inherit;
                border: 0px solid #2A2A2A;
            }
            form{
                position: relative;
                width: 100%;
                .input{
                    position: relative;
                    transition: all .4s ease-in-out;
                }
                .input input{
                    width: 100%;
                    padding:.7rem 1rem;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    font-size: 13px;
                    background-color: #1B1B1B;
                    border: 1px solid #2A2A2A;
                    transition: all .4s ease-in-out;
                    color: white;
                }
            
                .input button{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
`;
export default MainStyle;