/*Navbar.jsx*/
/*$b-shadow-card:-3px -3px 7px #ffffff73,2px 2px 5px rgba(94,104,121,0.288);
$b-shadow-card-2:inset 2px 2px 5px #babecc,inset -5px -5px 10px #fffff7;
$b-shadow-img:0px 0px 2px #32274b,0px 0px 0px 5px #b2d2eb,8px 8px 15px #81a3dd,-8px -8px 15px #606ac7;
$b-shadow-img-2:inset 2px 2px 5px #5b637e,inset -1px -1px 2px #4c2dc073;
*/
const main={
    position:'sticky',
    top:'50px',
    zIndex:'1'
}
const navWrapper = {
   // position:'sticky',
    //top:"50px",
    width: '100%',
    boxShadow: '0px 0px 2px #141414,0px 0px 0px 5px grey,8px 8px 15px #000000,-8px -8px 15px',
    display: 'flex',
    justifyContent: 'space-evenly',
    padding:'1vw'
}
const icon = {
    display: 'flex',
    justifyContent: "space-around",
    alignItems:'start',
    marginTop: '1vw',
    marginBottom: '1vw',
    paddingLeft: '0 2vw',
}
const brandLogo={ /*navbar.jsx explore.jsx*/
    fontSize:'4ch',
    padding:"1vw",
    color:'white'
}
/*Sidebar.jsx*/
const sidebarWrapper = {
    minHeight: '100vh',
    textAlign: 'center',
    boxShadow: '0px 5px 10px 0px gray'

}
const sidenavImg = {
    backgroundImage: 'url(https://media.istockphoto.com/photos/film-reels-on-black-background-movie-video-and-cinema-prodaction-and-picture-id1336937059?b=1&k=20&m=1336937059&s=170667a&w=0&h=Lg5T5VAhrTRhHmFrWp8cTWRjZrSm-nPkeTpVU2dsZoE=)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '40vh',
    color: 'white',
    padding: '2vw',
    fontSize: '3ch',
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}
const ul = {
    marginTop: '2vw',
    listStyle: 'none'
}
const li = {
    margin: '0 1vw',
    padding: '0 1vw',
    transition: 'ease 0.5'
}
const NavLinks = {
    display: 'flex',
    justifyContent: "space-evenly",
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    fontSize: '2ch'
}
/*footer.jsx*/
const footer={
    color:'white',
    background:'#141414',
    boxShadow:'0px 5px 5px 0px gray'
}
const grid={
    textAlign:'center'
}
const fa={
    color:"blue",
    textAlign:"center"
}
const faa={
    width:"100%",
}
const input={
    borderRadius:'10px',
    width:'70%',
    outline:'none',
    margin:'0.5vw',
    padding:'0.5vw',
    textAlign:'center',
    border:'none'
}
export {
    main,
    navWrapper,
    NavLinks,
    icon,
    brandLogo,
    sidenavImg,
    sidebarWrapper,
    ul, li,footer,grid,
    input,fa,faa
}