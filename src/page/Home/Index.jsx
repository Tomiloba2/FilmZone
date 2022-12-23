import { Search } from "@mui/icons-material";
import {Link, Outlet } from "react-router-dom";
import home from './css/home.module.css'
import Slider from "react-slick";
const Home = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          }
        ]
      };
    return (
        <main>
            <section className={home.article}>
                <Link to='/explore' className={home.search}>
                    <Search />
                </Link>
            </section>
            <section>
                <h4 className={home.p}>Movie Categories</h4>
            </section>
            <nav>
                <div></div>
                <Slider {...settings} className={home.slide}>
                    <section className={home.link}>
                        <Link to='/'>
                            <h4 className={home.linkH4}>action</h4>
                            <p className={home.linkH4}>1635 movies</p>
                        </Link>
                    </section>
                    <section className={home.link}>
                        <Link to='/adventure'>
                            <h4 className={home.linkH4}>adventure</h4>
                            <p className={home.linkH4}>2435 movies</p>
                        </Link>
                    </section>
                    <section className={home.link}>
                        <Link to='/scifi'>
                            <h4 className={home.linkH4}>sci-fi</h4>
                            <p className={home.linkH4}>1435 movies</p>
                        </Link>
                    </section>
                    <section className={home.link}>
                        <Link to='/horror'>
                            <h4 className={home.linkH4}>horror</h4>
                            <p className={home.linkH4}>1435 movies</p>
                        </Link>
                    </section>
                    <section className={home.link}>
                        <Link to='/animated'>
                            <h4 className={home.linkH4}>animated</h4>
                            <p className={home.linkH4}>4435 movies</p>
                        </Link>
                    </section>
                    <section className={home.link}>
                        <Link to='/comedy'>
                            <h4 className={home.linkH4}>comedy</h4>
                            <p className={home.linkH4}>1031 movies</p>
                        </Link>
                    </section>
                    <section className={home.link}>
                        <Link to='/comedy'>
                            <h4 className={home.linkH4}>Romance</h4>
                            <p className={home.linkH4}>1031 movies</p>
                        </Link>
                    </section>
                    <section className={home.link}>
                        <Link to='/comedy'>
                            <h4 className={home.linkH4}>Mystery</h4>
                            <p className={home.linkH4}>1031 movies</p>
                        </Link>
                    </section>
                    <section className={home.link}>
                        <Link to='/comedy'>
                            <h4 className={home.linkH4}>short</h4>
                            <p className={home.linkH4}>1031 movies</p>
                        </Link>
                    </section>

                </Slider>
                <div></div>{/*<section>
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