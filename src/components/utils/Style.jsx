const main={
    position:'sticky',
    top:'50px',
    zIndex:'1'
}
const navWrapper = {
   // position:'sticky',
    //top:"50px",
    width: '100%',
    boxShadow: '0 2px 0 1px grey',
    display: 'flex',
    justifyContent: 'space-between',
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
    //boxShadow:'0px 5px 5px 0px gray'
}
const grid={
    textAlign:'center'
}
const fa={
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    width:'100%',
    color:"white",
    textAlign:"center",
    //border:'1px solid white',
    //borderRadius:"250px",
    marginTop:'10px'
}
const faa={
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
}
const input={
    borderRadius:'10px',
    width:'85%',
    height:'5vh',
    marginTop:'10px',
    border:'1px solid black'
}
const submit={
    color:'white',
    borderRadius:'10px',
    width:'75%',
    height:'5vh',
    marginTop:'10px',
    border:'1px solid black',
    backgroundColor:'green'
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
    input,fa,faa,submit
}