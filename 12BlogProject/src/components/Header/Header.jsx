import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

function Header(){
    const {loggedIn} = useSelector(state=>state.loggedIn)

    const navItems=[
        {
            name:"Home",
            slug:"/"
        },
        {
            name:"Create Post",
            slug:"create-post"
        }
    ]

    return (
        <>
            {navItems.map((item)=>(
                <button key={item.name} onClick={()=>navigate(item.slug)}>{item.name}</button>
            ))}

            {loggedIn?
                (
                   <button onClick={handleLogout}>Logout</button> 
                ):
                (
                    <button onClick={()=>navigate("login")}>Login</button>
                )
            }
        </>
    )
}


export default Header;