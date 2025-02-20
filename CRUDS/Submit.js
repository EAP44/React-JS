import { useState } from "react";

function Submit() {
  const [table, settable] = useState([]);
  const [uname, setuname] = useState("");
  const [pwd, setpwd] = useState("");
  const [remember, setremember] = useState("");
  return (
    <div className="container p-5">
      <form>
        <div className="form-group m-4">
          <label for="uname">Username:</label>
          <input
            value={uname}
            onChange={(el) => {
              setuname(el.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Enter username"
            name="uname"
          />
        </div>
        <div className="form-group m-4">
          <label for="pwd">Password:</label>
          <input
            value={pwd}
            onChange={(e) => {
              setpwd(e.target.value);
            }}
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <div className="form-group form-check m-4">
          <label className="form-check-label">
            <input
              value={remember}
              onChange={(e) => {
                setremember(e.target.value);
              }}
              className="form-check-input"
              type="checkbox"
              name="remember"
            />
            {"  "}I agree.
          </label>
        </div>
        <button
          onClick={() => {
            const newElement = { nom: uname, pass: pwd };
            settable([...table, newElement]);
            setuname("");
            setpwd("");
          }}
          type="button"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      // <div className="container mt-5">
      //   {/* <table class="table table-bordered">
      //     <thead>
      //       <tr>
      //         <th>Firstname</th>
      //         <th>Lastname</th>
      //       </tr>
      //     </thead>
      //       {
      //           table.map(
      //           (e)=>{
      //               return(
      //                   <tbody>
      //                       <tr>
      //                           <td>{e.nom}</td>
      //                           <td>{e.pass}</td>
      //                       </tr>
      //                   </tbody>
      //               )
      //           }
      //           )
      //       }
      //   </table> */}
        <select 
            className="form-control" 
            onChange={
                (e)=>{
                    console.log(e.pass)
                    return(
                        <li>
                            {e.pass}
                        </li>
                    )
                }
            }
            >
            {
                table.map(
                (e)=>{
                    return(
                        <option>
                            {e.nom}
                        </option>
                    )
                }
                )
            }
        </select>
      </div>
    </div>
  );
}

export default Submit;
