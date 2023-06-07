import React, { useContext, useReducer } from "react";

const GlobalContext = React.createContext();
// базовий URL API аніме  - Jikan API
const api_base_URL = 'https://api.jikan.moe/v4';

const SEARCH_STATUS = 'SEARCH';
const LOADING_STATUS = 'LOADING';
const FETCH_FAVORITE = 'GET_FAVORITE';
const FETCH_UPCOMING = 'GET_UPCOMING';
const FETCH_AIRING = 'GET_AIRING';

// reducer hook
const reducer = (data, action) => {
    switch(action.type) {
        case LOADING_STATUS:
            return {...data, loading: true}
        case FETCH_FAVORITE:
            return {...data, favorite: action.payload, loading:false}
        case SEARCH_STATUS:
            return {...data, search_results: action.payload, loading:false}
        case FETCH_UPCOMING:
            return {...data, upcoming: action.payload, loading:false}
        case FETCH_AIRING:
            return {...data, airing: action.payload, loading:false}
        default:
            return data;
    }
}

export const GlobalContextProvider = ({children}) => {
    // створюємо потрібні масиви
    const initial_data = {
        favorite: [],        // масив для категорії "найпопулярніші"
        upcoming: [],        // масив для категорії "скоро вийдуть"
        airing: [],          // масив для категорії "в процесі"
        pictures: [],           
        search_results: [],        // масив для результатів пошуку
        is_search: false,          // перевіряємо статус пошуку
        loading: false,            // перевірка статусу завантаження
    }

    // reducer функція дозволяє змінювати вищеописаний initial_data
    const [data, dispatch] = useReducer(reducer, initial_data);
    const [search, def_search] = React.useState('')

    const write_search = (query) => {
        def_search(query.target.value);
        if(query.target.value === '') {
            data.is_search = false;
        }
    }

    const do_search = (query) => {
        query.preventDefault();
        if(search) {
            search_anime(search);
            data.is_search = true;
        } else {
            data.is_search = false;
            alert('Incorrect search')
        }
    }

        
    // фетч найпопулярніших аніме
    const fetch_favorite = async () => {
        // якщо даних немає, то відправляємо action LOADING
        dispatch({type: LOADING_STATUS});
        const response = await fetch(`${api_base_URL}/top/anime?filter=bypopularity`);
        const data = await response.json();
        // якщо дані є, то відправляємо їх з API в масив data 
        dispatch({type: FETCH_FAVORITE, payload: data.data})
        // тепер коли ми отримали дані по екшену FETCH_FAVORITE оновлюємо initial_data
    }

    const fetch_upcoming = async () => {
        dispatch({type: LOADING_STATUS});
        const response = await fetch(`${api_base_URL}/top/anime?filter=upcoming`);
        const data = await response.json();
        dispatch({type: FETCH_UPCOMING, payload: data.data})
    }

    const fetch_airing = async () => {
        dispatch({type: LOADING_STATUS});
        const response = await fetch(`${api_base_URL}/top/anime?filter=airing`);
        const data = await response.json();
        dispatch({type: FETCH_AIRING, payload: data.data})
    }

    const search_anime = async (query) => {
        dispatch({type: LOADING_STATUS})
        const response = await fetch(`${api_base_URL}/anime?q=${query}&order_by=popularity&sort=asc&sfw`);
        const data = await response.json();
        dispatch({type: SEARCH_STATUS, payload: data.data})
    }

    // initial render
    React.useEffect(() => {fetch_favorite()}, [])

    return (
        <GlobalContext.Provider value={{
            ...data,
            write_search,
            do_search,
            search_anime,
            search,
            fetch_favorite,
            fetch_upcoming,
            fetch_airing,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

// ця функція дозволяє використовувати GlobalContext
export const useGlobalContext = () => {return useContext(GlobalContext);}