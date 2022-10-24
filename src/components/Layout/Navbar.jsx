import { icon, navWrapper, brandLogo,main } from '../utils/Style.jsx'
import { Link } from 'react-router-dom'
import { Search, PlayCircleOutlined, Mail, Settings, Home } from '@mui/icons-material'

const Navbar = () => {
    return (
        <main style={main}>
            <header style={navWrapper}>
                <h3 style={brandLogo}><PlayCircleOutlined /> Film<span id='logo' style={{ color: 'orange' }}>Zone</span></h3>
                <div style={icon}>
                    <Link to='/' title='home'>
                        <Home style={{ fontSize: '4ch', color: 'blue' }} />
                    </Link>
                    <div>
                        <Link to='/explore' title='Explore'>
                            <Search style={{ fontSize: '4ch', color: 'blue' }} />
                        </Link>
                    </div>
                    <div>
                        <Link to='/contact' title='contact us'>
                            <Mail style={{ fontSize: '4ch', color: 'blue' }} />
                        </Link>
                    </div>
                    <div>
                        <Link to='/setting' title='settings'>
                            <Settings style={{ fontSize: '4ch', color: 'blue' }} />
                        </Link>
                    </div>
                </div>
            </header>
        </main>
    );
}

export default Navbar;