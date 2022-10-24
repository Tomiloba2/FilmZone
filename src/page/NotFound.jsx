import {Link} from 'react-router-dom'

const NotFound = () => {

    return (
        <main style={{
            position:'relative',
            top:'20%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign:'center'
        }}>
            <section >
                <h1 style={{
                    fontSize:'8ch'
                }}>404 Error</h1>
                <h4  style={{
                    fontSize:'4ch'
                }}>This page was not Found</h4><br />
                <p style={{
                    fontSize:'2ch'
                }}>Please type in the correct url</p><br />
                <Link to='/'>Back to home page</Link>
            </section>
        </main>
    );
}

export default NotFound;