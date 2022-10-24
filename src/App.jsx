import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './components/utils/App.css'
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import Contact from './page/Contact/Index';
import Details from './page/Explore/Details';
import Explore from './page/Explore/Index';
import Favourite from './page/Favourite/Favourite';
import Home from './page/Home/Index';
import NotFound from './page/NotFound';
import Setting from './page/Settings/Index';
import ActionMovie from './page/Home/page/ActionMovie';
import AdventureMovie from './page/Home/page/AdventureMovie';
import AnimatedMovie from './page/Home/page/AnimatedMovie';
import ComedyMovie from './page/Home/page/ComedyMovie';
import HorrorMovie from './page/Home/page/HorrorMovie';
import SciFiMovie from './page/Home/page/SciFiMovie';

const App = () => {
  const [mode, setMode] = useState('light')
  return (
    <>
      <main className={mode}>
        <section>
          <article className='sidebar'>
            <Sidebar />
          </article>
          <article className='main-article'>
            <div>
              <Navbar />
            </div>
            <div style={{ boxShadow: "inset 2px 2px 5px #babecc,inset -5px -5px 10px #fffff7", margin: '1vw', minHeight: '80vh' }}>
              <Routes>
                <Route path='/' element={<Home />}>
                  <Route index element={<ActionMovie />} />
                  <Route path='adventure' element={<AdventureMovie />} />
                  <Route path='animated' element={<AnimatedMovie />} />
                  <Route path='comedy' element={<ComedyMovie />} />
                  <Route path='horror' element={<HorrorMovie />} />
                  <Route path='scifi' element={<SciFiMovie />} />
                </Route>
                <Route path='/explore' element={<Explore />} />
                <Route path='/favourite' element={<Favourite />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/setting' element={<Setting mode={mode} setMode={setMode} />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </article>
        </section>
        <section className='footer'>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;