import { main } from '../utils/Style.jsx'
import { Link } from 'react-router-dom'
import { Search, Mail, Settings, Home } from '@mui/icons-material'

const Navbar = () => {
    return (
        <main style={main}>
            <header className='nav-wrapper'>
                <h3 className='brandlogo'> Film<span id='logo' style={{ color: 'orange' }}>Zone</span></h3>
                <div className='icon'>
                    <Link to='/' title='home'>
                        <Home style={{ fontSize: '4ch', color: 'white', marginLeft:'2rem' }} />
                    </Link>
                    <div>
                        <Link to='/explore' title='Explore'>
                            <Search style={{ fontSize: '4ch', color: 'white', marginLeft:'2rem'  }} />
                        </Link>
                    </div>
                    <div>
                        <Link to='/contact' title='contact us'>
                            <Mail style={{ fontSize: '4ch', color: 'white', marginLeft:'2rem'  }} />
                        </Link>
                    </div>
                    <div>
                        <Link to='/setting' title='settings'>
                            <Settings style={{ fontSize: '4ch', color: 'white', marginLeft:'2rem'  }} />
                        </Link>
                    </div>
                </div>
            </header>
        </main>
    );
}

export default Navbar;