import React from "react";
import { useState } from "react";
import HP from './HP.jpg'
import Acer from './Acer.jpg'
import Huawei from './Huawei.jpg'

const Produit =[
        {id:'1',src: HP ,title:'PC Portable Gamer HP VICTUS',price :7490},
        {id:'2',src: HP ,title:'PC Portable Gamer HP VICTUS',price :2190},
        {id:'3',src: Acer ,title:'Pc Portable Chromebook Acer',price :3640},
        {id:'4',src: Huawei ,title:'PC Portable - HUAWEI',price :1270},
        ]

export default function Test() {
        const [Total,setTotal] = useState(0);
        const [Q,setQ] = useState(1);
        function affichage () {
            return Produit.map((elmt,i) => {
            return (
                <div key={elmt.id} className="col">
                <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" alt={elmt.title} src={elmt.src}  width={400} height={200}/>
                    <div className="card-body">
                    <p className="card-title">{elmt.title}</p>
                    <p className="card-text">{elmt.price} MAD</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <input type="number" value={Q} onChange={(e)=>{setQ(e.target.value)}} className="form-controlr m-2 col-2"/>
                        <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={()=>{
                                setTotal(
                                    prevalue =>{
                                        return prevalue + (elmt.price * Q)
                                    }
                                )
                            }}
                        >
                            Ajouter au panier
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            );
            });
        };

  return (
    <div className="container card  shadow mt-5 p-5">
        <div className="row">
            {affichage()}
        </div>
        <div className="row m-4">
            Panier : {Total}
            <button 
            className="btn btn-sm btn-outline-secondary col-1 mx-3"
            onClick={()=>{
                setTotal(
                    annule =>{
                        return 0
                    }
                )
            }}
            >Annulé</button>
        </div>
    </div>
  );
}
