import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../Config/Action";
import { useNavigate } from "react-router-dom";

export default function UserAdd(){
    const count = useSelector((data)=>data.users.length)
    const [name,setname]= useState("")
    const [email,setemail]= useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleclick = ()=>{
        dispatch(Add({
            id: count+1 ,
            name: name,
            email: email
        }))
        navigate('/')
    }
    return(
        <div className="container shadow-sm mt-5 p-5 bg-light">
                <h1 className="text-center text-primary">UserAdd</h1>
                <h4 className="text-center">Add user to users liste </h4>
                <input type="text" className="form-control mt-5" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/>
                <input type="text" className="form-control mt-5" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <input type="button" className="btn bg-primary text-light mt-5" value="Add" onClick={handleclick}/>
        </div>
    );
};