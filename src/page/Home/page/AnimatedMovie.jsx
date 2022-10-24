import animated from './css/movies.module.css'
import Movies from '../components/Movie'

const AnimatedMovie = () => {
    return ( 
        <main className={animated.a}>
            <h4 className={animated.title}>Animation</h4>
            <section className={animated.grid}>
            <Movies id='tt0089984'/>
            <Movies id='tt2709768'/>
            <Movies id='tt5113040'/>
            <Movies id='tt0106140'/>
            <Movies id='tt0103359'/>
            <Movies id='tt1800763'/>
            <Movies id='tt0417299'/>
            <Movies id='tt6859260'/>
            <Movies id='tt0447854'/>
            <Movies id='tt0116728'/>
            <Movies id='tt3196338'/>
            <Movies id='tt0280277'/>
            <Movies id='tt6095472'/>
            <Movies id='tt3513498'/>
            <Movies id='tt0791188'/>
            <Movies id='tt7488208'/>
            <Movies id='tt10436228'/>
            </section>
        </main>
     );
}
 
export default AnimatedMovie;