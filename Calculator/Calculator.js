import { useState } from 'react';
import './cal.css'
export default function Cal() {
    const [Numv,setNumv] = useState(0)
    const [ope,setope] = useState('')
    console.log(ope)
    const NumVal = (e)=>{
        Numv?setNumv((pre)=>pre + e.target.value):setNumv(e.target.value)
    }
    const operator = (e)=>{
        setope(e.target.value)
    }
    const equls = ()=>{
        
    }
    const comma = (e)=>{
        if(Numv.includes(',')){return}
        else{setNumv((pre)=>pre + e.target.value)}       
    }
  return (
    <>
      <div className="container">
        <section className="screen">{Numv}</section>
        <div className="button-row">
          <input type="button" className="button" value={(Numv!==0 && Numv!=='0' )?'C':'AC'} onClick={(e)=>{setNumv(0)}}/>
          <input type="button" className="button" value='-/+' onClick={operator}/>
          <input type="button" className="button" value='%' onClick={operator}/>
          <input type="button" className="button" value='÷' onClick={operator}/>
        </div>
        <div className="button-row">
          <input type="button" className="button" value={7} onClick={NumVal}/>
          <input type="button" className="button" value={8} onClick={NumVal}/>
          <input type="button" className="button" value={9} onClick={NumVal}/>
          <input type="button" className="button" value='×' onClick={operator}/>
        </div>
        <div className="button-row">
          <input type="button" className="button" value={4} onClick={NumVal}/>
          <input type="button" className="button" value={5} onClick={NumVal}/>
          <input type="button" className="button" value={6} onClick={NumVal}/>
          <input type="button" className="button" value='-' onClick={operator}/>
        </div>
        <div className="button-row">
          <input type="button" className="button" value={1} onClick={NumVal}/>
          <input type="button" className="button" value={2} onClick={NumVal}/>
          <input type="button" className="button" value={3} onClick={NumVal}/>
          <input type="button" className="button" value='+' onClick={operator}/>
        </div>
        <div className="button-row">
          <input type="button" className="button zero" value={0} onClick={NumVal}/>
          <input type="button" className="button" value=',' onClick={comma}/>
          <input type="button" className="button" value='=' onClick={equls}/>
        </div>
      </div>
    </>
  );
}
