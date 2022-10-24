import { useState } from 'react'
import { useParams } from 'react-router-dom'
import details from './css/details.module.css'
import { Error } from '@mui/icons-material'
import Card from '../../components/utils/Card'

const Details = (props) => {
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
                <div className={details.h3}>
                    <div>
                        <Error className={details.icon} />
                        A Network error has occured
                    </div>
                </div>
            ) : (
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
            )}
        </main>
    );
}

export default Details;