import { useEffect, useState } from 'react'
import './banner.css'
import { requests } from './requests'
type banner={
    title:string,
    name:string,
    original_name:string,
    overview:string,
    backdrop_path:string
}
function Banner() {
    const [state, setState] = useState<banner>({overview:'',backdrop_path:'',title:'',name:'',original_name:''})
    useEffect(() => {
        fetch(requests.fetchNetflixOriginals)
            .then(res => res.json())
            .then(data => {
                let res=data.results[Math.floor(Math.random() * 10) + 1]                
                setState((prevState)=>{
                    return {...prevState,...res}
                })
            })
    }, [])
    function truncate(str:string, length:number) {
        return str?.length > length ? str.substr(0, length - 1) + '...' : str
    }
    return (
        <header className='banner' style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${state.backdrop_path}')`,
            backgroundSize: 'cover',
            backgroundPosition: `center center`
        }}>
            <div className='banner__content'>
                <h1 className='banner__title'>{state.title || state.name || state.original_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>
                    {truncate(state.overview, 150)}
                </h1>
            </div>
            <div className='banner__fadeBotttom'></div>
        </header >
    )
}

export default Banner