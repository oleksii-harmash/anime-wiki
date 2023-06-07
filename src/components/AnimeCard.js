import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import AnimeCardStyle from './AnimeCardStyle'
import { FaArrowLeft } from 'react-icons/fa';


function AnimeCard() {
    const {anime_id} = useParams()

    const [anime, def_anime] = React.useState({})
    const [characters, def_characters] = React.useState([])
    const [more, def_more] = React.useState(false)

    const {title_english, title, trailer, rank, images, aired, episodes, duration, popularity, score, scored_by, synopsis, status, type} = anime

    const fetch_anime = async (anime_id) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime_id}`)
        const data = await response.json()
        def_anime(data.data)
    }

    const fetch_characters = async (anime_id) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime_id}/characters`)
        const data = await response.json()
        def_characters(data.data)
        console.log(data.data)
    }

    useEffect(() => {
        fetch_anime(anime_id)
        fetch_characters(anime_id)
    }, [])


    return (
        <AnimeCardStyle>
            <div className="back">
                <Link to="/">
                    <i className="arrow"></i>
                    <FaArrowLeft />
                    back to Home
                </Link>
            </div>
            <h1>{title_english} / {title}</h1>
            <div className='info'>
                <div className='about'>
                    <div className='poster'>
                        <img src={images?.jpg.large_image_url} alt='' />
                    </div>
                    <div className='card'>
                        <p><span>Type:  </span><span>{type}</span></p>
                        <p><span>Episodes: </span><span>{episodes}</span></p>
                        <p><span>Episode duration:  </span><span>{duration}</span></p>
                        <p><span>Status:  </span><span>{status}</span></p>
                        <p><span>Aired:  </span><span>{aired?.string}</span></p>
                        <p><span>Popularity:  </span><span>{popularity}</span></p>
                        <p><span>Score:  </span><span>{score}</span></p>
                        <p><span>Scored by:  </span><span>{scored_by}</span></p>
                        <p><span>Rank:  </span><span>{rank}</span></p>
                    </div>
                </div>
                <p className='description'>
                    {more ? synopsis: synopsis?.substring(0, 400) + '...'}
                    <button onClick={() => { def_more(!more) }}> {more ? 'Show less': 'Show more'} </button>
                </p>
            </div>
            <div className='trailer'>
                {trailer?.embed_url ? 
                    <iframe 
                        src={trailer?.embed_url} 
                        title="trailer"
                        width="750"
                        height="425"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe> :
                    <h3>Error</h3>
                }
            </div>
            <div className="characters">
                {characters?.map((character, index) => {
                    const {role} = character
                    const {images, name, mal_id} = character.character
                    return <div className="character">
                            <img to={`/character/${mal_id}`} key={index} src={images?.jpg.image_url} alt="" />
                            <h4>{name}</h4>
                            <p>{role}</p>
                        </div>
                })}
            </div>
        </AnimeCardStyle>
    )
}

export default AnimeCard