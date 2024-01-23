import "./style.css"
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login (){
    // var
    const [error,seterror] = useState()
    const users = useSelector(data=>data.users) 
    const [email,setemail]= useState("")
    const [password,setpassword]= useState("")
    const [checkded,setcheckded]= useState(false)
    const Navigate = useNavigate()
    // function login
    const handelLogin = ()=>{
        const user = users.find(user=>user.email===email && user.password===password);
        if(user){
            Navigate(`/Data/${user.id}`)
        }else{
            seterror("The login details are incorrect.")
        }
    }
    return(
        <div className="container">
            <form>
                <h1>Login</h1>
                <input className="input" type="email" value={email} onChange={e=>setemail(e.target.value)} placeholder="Email"/>
                <input className="input" type="password" value={password} onChange={e=>setpassword(e.target.value)} placeholder="Password"/>
                <p><input type="checkbox" value={checkded} onChange={e=>setcheckded(e.target.checked)}/>Accept all conditions</p>
                <button type="button" onClick={handelLogin}>Login</button>
                <p>Not a member yet? <Link to={"/Sign-Up"}>Sign Up</Link></p>
                <h6 className="text-danger">{error}</h6>
            </form> 
        </div>
    );
};
export default Login;