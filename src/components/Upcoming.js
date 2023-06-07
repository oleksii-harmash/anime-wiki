
import React from 'react'
import { useGlobalContext } from '../context/global'
import { Link } from 'react-router-dom'
import FavoriteStyle from './FavoriteStyle'


// функція, що мапить дані про найближчі аніме
function Upcoming({rendered}) {
  const {upcoming, is_search, search_results} = useGlobalContext()
  
  const render = () => {
    // якщо пошук виконується, то:
    if (!is_search && rendered === 'upcoming'){
      // повертаємо потрібні нам дані
      return upcoming?.map((data) => {
        // mal_id унікальне id anime
        return <Link to={`/anime/${data.mal_id}`} key={data.mal_id}>
          <img src={data.images.jpg.large_image_url} alt=''/>
          <p>{data.popularity}. {data.title_english}</p>
        </Link>
      })
    } else {
        return search_results.map((data) =>{
          return <Link to={`/anime/${data.mal_id}`} key={data.mal_id}>
            <img src={data.images.jpg.large_image_url} alt=''/>
            <p>{data.popularity}. {data.title_english}</p>
          </Link>
        })
    }
  }

  return (
    <FavoriteStyle>
      <div className='favorite'>
        {render()}
      </div>
    </FavoriteStyle>
  )
}

export default Upcoming