import React from 'react'
import Favorite from './Favorite'
import { useGlobalContext } from '../context/global'
import MainStyle from './MainStyle'

function Main() {
    const {write_search, search, search_anime, do_search, fetch_favorite, fetch_upcoming, fetch_airing} = useGlobalContext()
    const [rendered, def_rendered] = React.useState('favorite')
    
    const navigate = () => {
        switch(rendered) {
            case 'favorite':
                return <Favorite rendered={rendered}/>
            default:
                return <Favorite rendered={rendered}/>
        }
    }
  return (
    <MainStyle>
        <header>
            <div className='logo'>
                {/* <h1>
                    {rendered === 'favorite' ? 'Favorite': 
                    rendered === 'airing'? 'Airing': 'Upcoming'}
                </h1> */}
            </div>
            <div className='search'>
                <div className='favorite-filter'>
                    <button onClick={() => {def_rendered('favorite')}}>Favorite</button>
                </div>
                <form className='search-form' action=''>
                    <div className='input'>
                        <input type='text' placeholder='Search Anime' value={search} onChange={write_search} /> 
                        <button type='submit' onClick={do_search}>Search</button>
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
  )
}


export default Main