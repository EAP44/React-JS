import React from "react";
import { useState } from "react";
function Submit(){
    const [Table,setTable] = useState([]);
    const [nom,setnom] = useState("");
    const [prenom,setprenom] = useState("");
    const [index,setindex] = useState(null);
    return(
        <div>
            <div className="container shadow-sm mt-5 p-5 bg-light">
                <h1 className="text-center text-primary">CRUD</h1>
                <h4 className="text-center">MANAGMENT SYSTEM</h4>
                <input type="text" className="form-control mt-5" placeholder="Nom" value={nom} onChange={(x)=>{setnom(x.target.value)}}/>
                <input type="text" className="form-control mt-5" placeholder="Prénom" value={prenom} onChange={(x)=>{setprenom(x.target.value)}}/>
                <input type="button" className="btn bg-primary text-light mt-5" value={index !== null ? "Update" : "creat"} onClick={
                        ()=>{
                            if (index == null){
                                setTable([...Table,{N:nom,P:prenom}]);
                                setnom("");
                                setprenom("");
                            }else{
                                const table = [...Table];
                                table[index] = {N:nom,P:prenom};
                                setTable(table);
                                setnom("");
                                setprenom("");
                                setindex(null);
                            }
                        }
                }/>
            </div>
            <div className="container shadow-sm mt-5 p-5 bg-light">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center table-primary">Nom</th>
                            <th className="text-center table-primary">Prénom</th>
                            <th className="text-center table-primary">Modifié</th>
                            <th className="text-center table-primary">Supprimé</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Table.map((e,i)=>{
                                if(e.N && e.P){
                                    return(
                                        <tr>
                                            <td className="text-center">{e.N}</td>
                                            <td className="text-center">{e.P}</td>
                                            <td className="text-center">
                                                <input type="button" className="btn bg-warning text-light" value="Modifié" onClick={
                                                        ()=>{
                                                            setnom(e.N)
                                                            setprenom(e.P)
                                                            setindex(i)
                                                        }
                                                }/>
                                            </td>
                                            <td className="text-center">
                                                <input type="button" className="btn bg-danger text-light" value="Supprimé" onClick={
                                                        (i)=>{
                                                            const table = [...Table];
                                                            table.splice(i,1);
                                                            setTable(table)
                                                        }
                                                }/>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Submit;