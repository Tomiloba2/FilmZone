import { NavLink } from 'react-router-dom'
import { Home, Search, Mail, Settings, PlayCircleFilled } from '@mui/icons-material'
import {
    NavLinks,
    sidenavImg,
    sidebarWrapper,
    ul, li
} from '../utils/Style'
const Sidebar = () => {
    return (
        <main>
            <section style={sidebarWrapper}>
                <article style={sidenavImg}>
                    <div>
                        <PlayCircleFilled style={{ fontSize: '4ch' }} />
                        <h5>Your very own cinema</h5>
                    </div>
                </article>
                <nav>
                    <ul style={ul}>
                        <li title='Home' style={li} className='nav-li'>
                            <NavLink to='/' style={NavLinks} end>
                                <Home />
                                <span className='nav-link'>Home</span>
                            </NavLink>
                        </li><br /><br /><br />
                        <li title='Explore' style={li} className='nav-li'>
                            <NavLink to='/explore' style={NavLinks} end>
                                <Search />
                                <span className="nav-link">Explore</span>
                            </NavLink>
                        </li><br /><br /><br />
                        <li title='Contact' style={li} className='nav-li'>
                            <NavLink to='/contact' style={NavLinks} end>
                                <Mail />
                                <span className="nav-link">Contact</span>
                            </NavLink>
                        </li><br /><br /><br />
                        <li title='Setting' style={li} className='nav-li'>
                            <NavLink to='/setting' style={NavLinks} end>
                                <Settings />
                                <span className="nav-link">Setting</span>
                            </NavLink>
                        </li><br/><br/>
                    </ul>
                </nav>
            </section>
        </main>
    );
}

export default Sidebar;