const Container = ({children}) => {
    const container={
        padding:' 0 2vw'
    }
    return ( 
        <main style={container}>{children}</main>
     );
}
 
export default Container;