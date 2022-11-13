import comedy from './css/movies.module.css'
import Movies from '../components/Movie'
import { settings } from './js/Setting'
import Slider from 'react-slick'
const ComedyMovie = () => {
    return (
        <main className={comedy.a}>
            <section >
                <Slider {...settings} className={comedy.grid}>
                <Movies id='tt0208003' />
                <Movies id='tt0421729' />
                <Movies id='tt0117218' />
                <Movies id='tt0144528' />
                <Movies id='tt0398165' />
                <Movies id='tt0096657' />
                <Movies id='tt0291721' />
                <Movies id='tt0257106' />
                </Slider>
            </section>
        </main>
    );
}

export default ComedyMovie;