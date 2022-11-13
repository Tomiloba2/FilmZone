import action from './css/movies.module.css'
import Movies from '../components/Movie'
import { settings } from './js/Setting'
import Slider from 'react-slick'
const ActionMovie = () => {
    return (
        <main className={action.a}>
            <section>
                <Slider {...settings} className={action.grid}>
                    <Movies id='tt12593682' />
                    <Movies id='tt8041270' />
                    <Movies id='tt1649418' />
                    <Movies id='tt10872600' />
                    <Movies id='tt0117193' />
                    <Movies id='tt11301946' />
                    <Movies id='tt2802144' />
                    <Movies id='tt12412888' />
                    <Movies id='tt14060094' />
                    <Movies id='tt13314558' />
                </Slider>
                <section>
                    <h4 className={action.h4}>Recommended for you</h4>
                    <Slider {...settings} className={action.grid}>
                        <Movies id='tt2463208' />
                        <Movies id='tt6710474' />
                        <Movies id='tt1464335' />
                        <Movies id='tt11138512' />
                        <Movies id='tt8178634' />
                        <Movies id='tt1877830' />
                        <Movies id='tt4998632' />
                        <Movies id='tt0401729' />
                        <Movies id='tt4425200' />
                        <Movies id='tt1181833' />
                    </Slider>
                </section>
            </section>
        </main>
    );
}

export default ActionMovie;