import Movies from "../components/Movie";
import horror from './css/movies.module.css'

const HorrorMovie = () => {
    return ( 
        <main className={horror.a}>
            <h4 className={horror.title}>Horror</h4>
            <section className={horror.grid}>
            <Movies id='tt0482606'/>
            <Movies id='tt1285009'/>
            <Movies id='tt0391198'/>
            <Movies id='tt0433386'/>
            <Movies id='tt0070047'/>
            <Movies id='tt0088993'/>
            <Movies id='tt0165662'/>
            <Movies id='tt0083907'/>
            <Movies id='tt0343644'/>
            <Movies id='tt4361050'/>
            <Movies id='tt2230358'/>
            <Movies id='tt0144120'/>
            <Movies id='tt1038072'/>
            <Movies id='tt0454919'/>
            <Movies id='tt0261983'/>
            <Movies id='tt1038988'/>
            <Movies id='tt0081505'/>
            <Movies id='tt1591095'/>
            <Movies id='tt5726086'/>
            </section>
        </main>
     );
}
 
export default HorrorMovie;