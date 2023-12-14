import React from "react";
function List({Table,setTask,sati,setTable}) {
  return (
      <ul class="list-group row">
        {
            Table.map((e,i)=>{
                return <>
                <li key={i} class="list-group-item">{e.title}
                    <span className="d-flex justify-content-end ">
                    <button class="btn btn-warning m-1" type="submit"
                    onClick={()=>{
                        setTask(e.title)
                        sati(i);
                    }}
                    ><i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="btn btn-danger m-1" type="submit"
                    onClick={
                      (i)=>{
                        const table = [...Table];
                        table.splice(i,1);
                        setTable(table)
                    }
                    }
                    ><i class="bi bi-trash-fill"></i>
                    </button>
                    </span>
                </li>
                </>
            })
        }
      </ul>
  );
}
export default List;
