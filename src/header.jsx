import { Link } from "react-router";

function Header (){
    return(
        <>
        <div style={{width:"100%",height:"20vh",backgroundColor:"green",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <Link to="/home">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/aboutUs">About Us</Link>
        </div>
        </>
    )
}

function Header1 (){
    return(
        <>
        <div style={{width:"100%",height:"25px"}}>Header1</div>
        </>
    )
}

export {Header,Header1};