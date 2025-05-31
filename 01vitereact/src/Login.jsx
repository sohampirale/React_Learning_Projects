function Login(props){
    console.log("Inside signup props = "+JSON.stringify(props));

    const login=()=>{
        const usernameElem = document.querySelector(".username");
        const passwordElem=document.querySelector(".password");
        if(!usernameElem||!passwordElem){
            console.log('Username or password Element not found');
        } else {
            console.log('Username = '+usernameElem.value);
            console.log('Password = '+passwordElem.value);
        }
    }
    
    return(<>
        <p>Enter Username</p>
        <input type="text" className="username"/><br/>
        <p>Enter Password</p>
        <input type="password" className="password"/><br/>
        <button onClick={login}>Login</button>
    </>)
}

export default Login;