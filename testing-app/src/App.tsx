import React, { useEffect } from 'react';

const API_KEY : string = "66b19217";
const API_URL : string = 'http://www.omdbapi.com?apikey=' + API_KEY;

const App : React.FC = () => {
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&S=${title}`)
        const data = await response.json();

        console.log(data)
    }

    useEffect(()=>{
        searchMovies("Shrek")
    }, []);

    return(
        <>
            <h1>Amogus poop</h1>
        </>    
    );
}

export default App;