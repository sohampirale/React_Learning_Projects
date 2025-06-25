function Signup(props){
    console.log("Inside signup props = "+JSON.stringify(props));

    function signup(){
        const usernameElem = document.querySelector(".username");
        const passwordElem=document.querySelector(".password");
        const newUser={
            username:usernameElem.value,
            password:passwordElem.value
        }
        props.users.push(newUser)
        console.log('Signup successfull');
    }

    return (<>
        <p>Enter Username</p>
        <input type="text" className="username"/><br/>
        <p>Enter Password</p>
        <input type="password" className="password"/><br/>
        <button onClick={signup}>Signup</button>
    </>)
}

export default Signup;