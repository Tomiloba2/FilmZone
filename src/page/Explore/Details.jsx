import { useState } from 'react'
import { useParams } from 'react-router-dom'
import details from './css/details.module.css'
import { Error, ArrowLeft, ArrowRight } from '@mui/icons-material'
import Card from '../../components/utils/Card';
import { useNavigate } from 'react-router-dom'

const Details = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const { id } = params
    const [item, setItem] = useState()
    const movieDetails = async () => {
        const res = await fetch(`https://www.omdbapi.com/?apikey=81967c1b&i=${id}`)
        const data = await res.json()
        setItem(data)
    }
    movieDetails()
    return (
        <main>
            {(!item) ? (
                <section>
                    <div className={details.h3}>
                        <div>
                            <Error className={details.icon} />
                            A Network error has occured
                        </div>
                    </div>
                    <div className={details.main}>
                        <ArrowLeft onClick={() => navigate(-1)} className={details.back} />
                        <ArrowRight onClick={() => navigate(1)} className={details.back} />
                    </div>
                </section>
            ) : (
                <section>
                    <div className={details.main}>
                        <ArrowLeft onClick={() => navigate(-1)} className={details.back} />
                        <ArrowRight onClick={() => navigate(1)} className={details.back} />
                    </div>
                    <main className={details.main}>
                        <div>
                            <img src={`${item.Poster}`} alt="poster" className={details.img} />
                        </div>
                        <section>
                            <Card>
                                <div className={details.info}>
                                    <p><span className={details.key}>Title</span>:&nbsp; {`${item.Title}`} </p><br />
                                    <p><span className={details.key}>Year</span>:&nbsp; {`${item.Year}`}</p><br />
                                    <p><span className={details.key}>Runtime</span>:&nbsp; {`${item.Runtime}`}</p><br />
                                    <p><span className={details.key}>Type</span>:&nbsp; {`${item.Type}`}</p><br />
                                    <p><span className={details.key}>Genre</span>:&nbsp; {`${item.Genre}`}</p><br />
                                    <p><span className={details.key}>Plot</span>:&nbsp; {`${item.Plot}`}</p><br />
                                    <p><span className={details.key}>Actors</span>:&nbsp; {`${item.Actors}`}</p><br />
                                </div>
                            </Card>
                        </section>
                    </main>
                </section>
            )}
        </main>
    );
}

export default Details;