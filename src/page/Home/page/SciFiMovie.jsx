import Movies from "../components/Movie";
import scifi from './css/movies.module.css'
import { settings } from './js/Setting'
import Slider from 'react-slick'
const SciFiMovie = () => {
    return (
        <main className={scifi.a}>
            <section>
                <Slider {...settings} className={scifi.grid}>
                    <Movies id='tt0133093' />
                    <Movies id='tt10838180' />
                    <Movies id='tt1375666' />
                    <Movies id='tt0078748' />
                    <Movies id='tt1136608' />
                    <Movies id='tt0103064' />
                    <Movies id='tt0438488' />
                    <Movies id='tt0448134' />
                    <Movies id='tt0084787' />
                </Slider>
                <section>
                    <h4 className={scifi.h4}>Recommended for you</h4>
                    <Slider {...settings} className={scifi.grid}>
                        <Movies id='tt0118884' />
                        <Movies id='tt0117731' />
                        <Movies id='tt1259571' />
                        <Movies id='tt1399103' />
                        <Movies id='tt0088763' />
                        <Movies id='tt0107290' />
                        <Movies id='tt0499549' />
                        <Movies id='tt0186151' />
                        <Movies id='tt0238380' />
                        <Movies id='tt0100802' />
                        <Movies id='tt1386703' />
                    </Slider>
                </section>
            </section>
        </main>
    );
}

export default SciFiMovie;