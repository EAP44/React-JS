import React, { useState } from "react";
import List from "./List";
function AddList() {
    const [Task,setTask] = useState('')
    const [Table,setTable] = useState([])
    const [i,seti] = useState(null)
  return (
    <>
    <div className="input-group mb-3">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="New Todo" value={Task} onChange={e=>setTask(e.target.value)}/>
        <span class="input-group-text">
          <i className="bi bi-journals"></i>
        </span>
      </div>
    </div>
    <div className="row">
        <div className="col text-center">
            <button type="button" class="btn btn-primary btn-block col-12" 
            onClick={()=>{
              if (i == null && Task !== ""){
                setTable([...Table,{title:Task}]);
                setTask("");
              }else{
                const table = [...Table];
                table[i] = {title:Task};
                setTable(table);
                setTask("");
                seti(null);
            }
            }}
            >{i !== null ? "Update" : "Add new task"}</button>
        </div>
    </div>
    <div className="container shadow-sm mt-5 p-5 border">
        <h2 className="text-center">TodoList</h2>
         <List Table={Table} setTask={setTask} sati={seti} setTable={setTable}/>   
    </div>
    </>
  );
}
export default AddList;

