const Card = ({children}) => {
    const card={
        border:"1px solid beige",
        //boxShadow:'inset 2px 2px 5px #000,inset -5px -5px 10px #141414'
    }
    return ( 
        <main style={card}>
            {children}
        </main>
     );
}
 
export default Card;