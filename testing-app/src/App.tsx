import React, { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'

const API_KEY : string = "66b19217";
const API_URL : string = 'http://www.omdbapi.com?apikey=' + API_KEY;

const movieTemplate = {
    "Title": "Shrek the Third",
    "Year": "2007",
    "imdbID": "tt0413267",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_SX300.jpg"
}

const App : React.FC = () => {
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&S=${title}`)
        const data = await response.json();

        console.log(data)
    }

    useEffect(()=>{
        
    }, []);

    return(
        <>
            <div className="app">
                <h1>MovieLand</h1>
                <div className="search">
                    <input type="text" placeHolder="Search for movies" value="Superman" onChange={()=>{

                    }}/>

                    <img src={SearchIcon} alt="" onClick={()=>{

                    }}/>
                </div>

                <div className="container">
                    <div className="movie">
                        <div>
                            <p>{movieTemplate.Year}</p>
                        </div>

                        <div>
                            <img src={movieTemplate.Poster !== 'N/A' ? movieTemplate.Poster : 'https://via.placeholder.com/400'} alt={movieTemplate.Title} />
                        </div>

                        <div>
                            <span>{movieTemplate.Type}</span>
                            <h3>{movieTemplate.Title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    );
}

export default App;