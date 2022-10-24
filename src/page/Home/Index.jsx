import { Link, Outlet } from "react-router-dom";
import home from './css/home.module.css'
const Home = () => {
    return (
        <main>
            <article className={home.article}>
                <div></div>
            <section className={home.hero}>
                <div>
                    <h4 className={home.h4}>FilmZone</h4>
                    <p className={home.p}>Your very own cinema</p>
                    <Link to='/explore' className={home.btn}><div>
                    Get started</div></Link>
                </div>
            </section>
            <div></div>
            </article>
            <nav className={home.nav}>
                <section className={home.link}>
                    <Link to='/'>
                        <img className={home.img} src="https://m.media-amazon.com/images/M/MV5BZjcxMzk1OWMtZjIzNC00ZTYzLWFmNDktMWM2YWQ5NGI3ODU2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg" alt="" />
                        <h4 className={home.linkH4}>action</h4>
                    </Link>
                </section>
                <section className={home.link}>
                    <Link to='/adventure'>
                        <img className={home.img} src="https://m.media-amazon.com/images/M/MV5BNDE5MDExNTQ1OF5BMl5BanBnXkFtZTcwMDIxMTM5Ng@@._V1_SX300.jpg" alt="" />
                        <h4 className={home.linkH4}>adventure</h4>
                    </Link>
                </section>
                <section className={home.link}>
                    <Link to='/scifi'>
                        <img className={home.img} src="https://m.media-amazon.com/images/M/MV5BMTQ4NTMwODQwNV5BMl5BanBnXkFtZTYwNTg0Nzk2._V1_SX300.jpg" alt="" />
                        <h4 className={home.linkH4}>sci-fi</h4>
                    </Link>
                </section>
                <section className={home.link}>
                    <Link to='/horror'>
                        <img className={home.img} src="https://m.media-amazon.com/images/M/MV5BMTA5NTMyN2UtMDBmOC00YzVlLWIzZTEtNTM0YjZmY2E4YjYzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="" />
                        <h4 className={home.linkH4}>horror</h4>
                    </Link>
                </section>
                <section className={home.link}>
                    <Link to='/animated'>
                        <img className={home.img} src="https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" alt="" />
                        <h4 className={home.linkH4}>animated</h4>
                    </Link>
                </section>
                <section className={home.link}>
                    <Link to='/comedy'>
                        <img className={home.img} src="https://m.media-amazon.com/images/M/MV5BMDQ5NjBhZmMtMTU0Ni00ODFiLTgwM2MtMDlkOTNkZDY5YjE5XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg" alt="" />
                        <h4 className={home.linkH4}>comedy</h4>
                    </Link>
                </section>
                {/*<section>
                    <img src="" alt="" />
                    <h4>action</h4>
                </section>
                <section>
                    <img src="" alt="" />
                    <h4>action</h4>
    </section>*/}
            </nav>
            <Outlet />
        </main>
    );
}

export default Home;