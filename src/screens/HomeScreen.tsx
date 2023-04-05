import React from 'react'
import './homeScreen.css'
import Nav from '../Nav'
// import Banner from '../Banner'
import Row from '../Row'
import { requests } from '../requests'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />
            {/* <Banner /> */}
            <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} isLargeRow />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} isLargeRow />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} isLargeRow />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} isLargeRow />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} isLargeRow />
            <Row title='Documentary Movies' fetchUrl={requests.fetchDocumentaries} isLargeRow />
        </div>
    )
}

export default HomeScreen