import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignAction } from "../Config/Action";
import { useNavigate } from "react-router-dom";

function Sign (){
    const count = useSelector(data=>data.users.length) 
    const [Name,setName]= useState("")
    const [Lname,setLname]= useState("")
    const [Age,setAge]= useState("")
    const [City,setCity]= useState("")
    const [Adress,setAdress]= useState("")
    const [email,setemail]= useState("")
    const [password,setpassword]= useState("")
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    const SendData = ()=>{
        if(Name && email && password ){
             Dispatch(SignAction({
            id: count+1,
            Name: Name,
            Lname:Lname,
            Age:Age,
            City:City,
            Adress:Adress,
            email:email,
            password:password
        }));
        Navigate("/")
        };
    };

    return(
        <div className="container">
            <form>
                <h1>Sign Up</h1>
                <input className="input" type="text" value={Name} onChange={e=>setName(e.target.value)} placeholder="Fist Name"/>
                <input className="input" type="text" value={Lname} onChange={e=>setLname(e.target.value)} placeholder="Last Name"/>
                <input className="input" type="text" value={Age} onChange={e=>setAge(e.target.value)} placeholder="Age"/>
                <input className="input" type="text" value={City} onChange={e=>setCity(e.target.value)} placeholder="City"/>
                <input className="input" type="text" value={Adress} onChange={e=>setAdress(e.target.value)} placeholder="Adress"/>
                <input className="input" type="email" value={email} onChange={e=>setemail(e.target.value)} placeholder="Email"/>
                <input className="input" type="password" value={password} onChange={e=>setpassword(e.target.value)} placeholder="Password"/>
                <button type="button" onClick={SendData}>Sign Up</button>
            </form>
        </div>
    );
};
export default Sign;