import { useState } from "react";
import Movies from "../Home/components/Movie";


const Favourite = () => {
    const [favouriteMovies, setFavouriteMovies] = useState([])
    const addFavourite = (item) => {
        setFavouriteMovies([...favouriteMovies, item])
        console.log(setFavouriteMovies([...favouriteMovies, item]));
    }
    return (
        <main>
            {favouriteMovies.map((fav) => {
                return (
                    <Movies
                        addFavourite={addFavourite}
                        id={fav} />
                )
            })}
        </main>
    );
}

export default Favourite;