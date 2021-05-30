import React from 'react';
import Row from "./Row";
import './App.css';
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {

  return (
    <div className="app">
      {/* Navbar */}
      <Nav />


      {/* Banner */}
      <Banner />


      {/* Row */}
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      

    </div>
  );
}

export default App;
