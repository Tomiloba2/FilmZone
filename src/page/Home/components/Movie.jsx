import { Error } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import movie from '../page/css/movies.module.css'

const Movies = ({ id,addFavourite }) => {
    const [movielists, setMovieLists] = useState()
    //useEffect(()=>{
    const getMovieLists = async () => {
        const res = await fetch(`https://www.omdbapi.com/?apikey=263d22d8&i=${id}`)
        const data = await res.json()
        setMovieLists(data)
    }
    getMovieLists()
    //},[])
    return (
        <main>
            {(!movielists) ? (
                <div>
                    <div>
                        <Error />
                        A Network error has occured
                    </div>
                </div>
            ) : (
                <main className={movie.item}>
                        <Link className={movie.a} to={`/details/${movielists.imdbID}`}>
                            <img src={`${movielists.Poster}`} alt="" className={movie.img} />
                            <h5 className={movie.h4}>{`${movielists.Title}`} </h5>
                        </Link>
                </main>
            )}
        </main>
    );
}

export default Movies;