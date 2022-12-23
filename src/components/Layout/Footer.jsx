import {footer,grid,ul,input,fa,faa,submit} from '../utils/Style.jsx'

const Footer = () => {
    return ( 
        <footer style={footer}>
            <section className="grid-container" style={grid}>
                <article>
                    <h5 style={{fontSize:'2ch',fontFamily:'algerian'}}>About us</h5>
                    <p style={{textAlign:'justify',width:'90%'}}>
                        We are one of the best movie website,dedicated to giving you 
                        the best experience at little to no cost .
                    </p>
                </article>
                <article>
                    <h5 style={{fontSize:'2ch',fontFamily:'algerian'}}>
                        Social Links
                    </h5>
                    <ul style={ul}>
                        <li style={faa}><a href="*"><i className="fa fa-facebook fa-2x" style={fa}></i></a></li>
                        <li  style={faa}><a href="*"><i className="fa fa-twitter fa-2x" style={fa}></i></a></li>
                        <li  style={faa}><a href="*"><i className="fa fa-linkedin fa-2x" style={fa}></i></a></li>
                    </ul>
                </article>
                <article>
                    <h5 style={{fontSize:'2ch',fontFamily:'algerian'}}>Subscribe to our News Letter</h5>
                    <form action="">
                        <input type="text" placeholder="enter your name" style={input} required /><br />
                        <input type="email" placeholder="enter your email" style={input}  required /><br />
                        <input type="submit" value='send' style={submit}  />
                    </form>
                </article>
            </section>
        </footer>
     );
 }
  
 export default Footer;