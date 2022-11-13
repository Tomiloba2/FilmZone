import adventure from './css/movies.module.css'
import Movies from '../components/Movie';
import { settings } from './js/Setting'
import Slider from 'react-slick'
const AdventureMovie = () => {
    return (
        <main className={adventure.a}>
            <section >
                <Slider {...settings} className={adventure.grid}>
                    <Movies id='tt7547410' />
                    <Movies id='tt0499549' />
                    <Movies id='tt0082971' />
                    <Movies id='tt4041372' />
                    <Movies id='tt0368891' />
                    <Movies id='tt0363771' />
                    <Movies id='tt0091369' />
                </Slider>
                <section>
                    <h4>Recommended for you</h4>
                    <Slider {...settings} className={adventure.grid}>
                        <Movies id='tt0473075' />
                        <Movies id='tt1014759' />
                        <Movies id='tt0367882' />
                        <Movies id='tt0449010' />
                        <Movies id='tt0814255' />
                        <Movies id='tt1735898' />
                        <Movies id='tt0373889' />
                        <Movies id='tt0367594' />
                        <Movies id='tt0970179' />

                    </Slider>
                </section>
            </section>
        </main>
    );
}

export default AdventureMovie;