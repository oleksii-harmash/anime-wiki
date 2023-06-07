import React from 'react'
import Favorite from './Favorite'
import { useGlobalContext } from '../context/global'
import MainStyle from './MainStyle'
import Upcoming from './Upcoming'
import Airing from './Airing'
import styled from 'styled-components'


function Main() {
    const {write_search, search, do_search, fetch_upcoming, fetch_airing} = useGlobalContext()
    const [rendered, def_rendered] = React.useState('favorite')
    
    const navigate = () => {
        switch(rendered) {
            case 'favorite':
                return <Favorite rendered={rendered}/>
            case 'upcoming':
                return <Upcoming rendered={rendered}/>
            case 'airing':
                return <Airing rendered={rendered}/>
            default:
                return <Favorite rendered={rendered}/>
        }
    }
  return (
    <>
    <TitleStyle>
      <h1>wiki-anime</h1>
      <h2>by O. Harmash</h2>
    </TitleStyle>
    <MainStyle>
        <header>
            <div className='search'>
                <div className='favorite-filter'>
                    <button onClick={() => {def_rendered('favorite')}}>Favorite</button>
                </div>
                <form className='search-form' action='' onSubmit={do_search}>
                    <div className='input'>
                        <input type='text' placeholder='Search Anime' value={search} onChange={write_search} /> 
                        <button type='submit'>Search</button>
                    </div>
                </form>
                <div className='airing-filter'>
                    <button onClick={() => {
                        def_rendered('airing')
                        fetch_airing()
                    }}>Airing</button>
                </div>
                <div className='upcoming-filter'>
                    <button onClick={() => {
                        def_rendered('upcoming')
                        fetch_upcoming()
                        }}>Upcoming</button>
                </div>
            </div>
        </header>
        {navigate()}
    </MainStyle>
    </>
  )
}


const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  color: white;

  h1 {
    font-size: 35px;
    font-family: "Pacifico", sans-serif;
  }

  h2 {
    font-size: 9px;
    font-family: "Ubuntu", sans-serif;
    margin-top: -0.5rem;
    font-style: italic;
    margin-left: 4rem;
  }
`


export default Main