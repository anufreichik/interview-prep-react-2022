import React, {useEffect, useState} from 'react';
import axios from "axios";
import './movies.css'
const Movies = () => {
    const [movies,setMovies] = useState([]);
    const [selectedMoviePrice, setSelectedMoviePrice] = useState(0)
    const handleSelectMovieOnChange=(e)=>{
        setSelectedMoviePrice(+e.target.value);
    }

    const getMovies = async () => {
        const {data} =  await axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
            const extendedData = data?.map((el,ind)=>{
                return {...el, id:ind, price:Math.floor(Math.random()*10) + 10}
            })
        console.log(extendedData)
            setMovies(extendedData);
    }

    useEffect(() => {
            getMovies();
    }, [])
    return (
        <div>
            <label>Pick a movie:</label>
            <select className='movies-select' onChange={(e)=>handleSelectMovieOnChange(e)}>
                <option value="10">Avengers: Endgame ($10)</option>
                <option value="12">Joker ($12)</option>
                <option value="8">Toy Story 4 ($8)</option>
                <option value="9">The Lion King ($9)</option>
                {/*{movies.map(el=>(*/}
                {/*    <option value={el.price}>{`${el.Title} ($${el.price})`}</option>*/}
                {/*))*/}
                {/*}*/}
            </select>
        </div>
    );
};

export default Movies;
