import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard.tsx';
import SearchIcon from './search.svg'

const API_KEY : string = "66b19217";
const API_URL : string = 'http://www.omdbapi.com?apikey=' + API_KEY;

const movie = {
    "Title": "Shrek the Third",
    "Year": "2007",
    "imdbID": "tt0413267",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_SX300.jpg"
}

const App : React.FC = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&S=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
        
    }, []);

    return(
        <>
            <div className="app">
                <h1>MovieLand</h1>
                <div className="search">
                    <input type="text" placeholder="Search for movies" value={searchTerm} onChange={(e)=>{
                        setSearchTerm(e.target.value);
                    }}/>

                    <img src={SearchIcon} alt="" onClick={()=>{
                        searchMovies(searchTerm);
                    }}/>
                </div>

                {
                    movies?.length > 0
                    ? (
                        <div className="container">
                            {
                                movies.map((movie)=>(
                                    <MovieCard Title={movie.Title} Year={movie.Year} Type={movie.Type} Poster={movie.Poster}/>
                                ))
                            }
                            
                        </div>                        
                    )
                    :
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
                }


            </div>
        </>    
    );
}

export default App;