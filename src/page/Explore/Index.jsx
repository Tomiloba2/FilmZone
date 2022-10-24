import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { Search } from '@mui/icons-material'
import explore from './css/explore.module.css'
import Card from "../../components/utils/Card";
const Explore = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getMovies = async () => {
            const res = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=81967c1b&page=1`)
            const data = await res.json()
            if (data.Search) {
                setMovies(data.Search)
            } else {
                console.log('an error occured');
            }
        }
        if (search.length >= 3) {
            getMovies(search)
        }
    }, [search])
    return (
        <main className={explore.main}>
            <section className={explore.title}>
                <div><Search />Explore</div>
            </section>
            <section className="searchbar" style={{ textAlign: 'center' }}>
                <input
                    type="search"
                    placeholder="search for your favourite movies,series and episodes"
                    value={search}
                    onChange={(e => setSearch(e.target.value))}
                    className={explore.input} />
            </section>
            <section className={explore.grid}>
                {movies.map((movie) => {
                    return (
                        <section key={movie.imdbID} className={explore.item}>
                            <Card>
                                <Link to={'/details/' + movie.imdbID} className={explore.a}>
                                    <article>
                                        <img src={movie.Poster} alt={movie.Title} className={explore.img} />
                                    </article>
                                    <article>
                                        <h4 className={explore.h4}>{movie.Title}</h4>
                                    </article>
                                </Link>
                            </Card>
                        </section>
                    )
                })}
            </section>
        </main>
    );
}

export default Explore;