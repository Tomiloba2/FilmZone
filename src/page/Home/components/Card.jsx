const HomeCard = ({children}) => {
    const card={
        border:"1px solid beige",
        //boxShadow:'0px 0px 2px #32274b,0px 0px 0px 5px #b2d2eb,8px 8px 15px #81a3dd,-8px -8px 15px #606ac7',
        borderRadius:'5px'
    }
    return ( 
        <main style={card}>
            {children}
        </main>
     );
}

const ImageCard = ({children}) => {
    const card={
        border:"1px solid beige",
        //boxShadow:'inset 2px 2px 5px #5b637e,inset -1px -1px 2px #4c2dc073',
        borderRadius:'5px'
    }
    return ( 
        <main style={card}>
            {children}
        </main>
     );
}


 
export  {HomeCard,ImageCard};