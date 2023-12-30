import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Update } from "../Config/Action";
import { useNavigate } from "react-router-dom";
export default function UserUpdate(){
    const { id } = useParams();
    const user = useSelector((data)=>data.users.find((e)=>e.id===parseInt(id)))
    const [name,setname]= useState(user.name)
    const [email,setemail]= useState(user.email)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleclick = ()=>{
        dispatch(Update({
            id: id ,
            name: name,
            email: email
        }))
        navigate('/')
    }
    return(
        <div className="container shadow-sm mt-5 p-5 bg-light">
                <h1 className="text-center text-primary">UserUpdate</h1>
                <h4 className="text-center">Update data user </h4>
                <input type="text" className="form-control mt-5" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/>
                <input type="text" className="form-control mt-5" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <input type="button" className="btn bg-primary text-light mt-5" value="Add" onClick={handleclick}/>
        </div>
    );
};