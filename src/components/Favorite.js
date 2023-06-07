import React from 'react'
import { useGlobalContext } from '../context/global'
import { Link } from 'react-router-dom'
import FavoriteStyle from './FavoriteStyle'


// функція, що мапить дані про найпопулярніші аніме
function Favorite() {
  const {favorite, is_search} = useGlobalContext()
  
  const render = () => {
    // якщо пошук виконується, то:
    if (!is_search){
      // повертаємо потрібні нам дані
      return favorite.map((data) => {
        // mal_id унікальне id anime
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

export default Favorite