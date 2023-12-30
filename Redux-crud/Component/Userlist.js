import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Delete } from "../Config/Action";

export default function Userlist() {
    const users = useSelector(data=>data.users)
    const dispatch = useDispatch()
    const handelDelete = (id)=>{
        dispatch(Delete(id))
    }
  return (
    <div className="container shadow-sm mt-5 p-5 bg-light">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center table-primary">ID</th>
            <th className="text-center table-primary">Name</th>
            <th className="text-center table-primary">Email</th>
            <th className="text-center table-primary">Update</th>
            <th className="text-center table-primary">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i) => {
            if (user.id && user.name) {
              return (
                <tr key={i}>
                  <td className="text-center">{user.id}</td>
                  <td className="text-center">{user.name}</td>
                  <td className="text-center">{user.email}</td>
                  <td className="text-center">
                    <Link to={`/update-user/${user.id}`}><input type="button" className="btn bg-warning text-light" value="Update"/></Link>
                  </td>
                  <td className="text-center">
                    <input type="button" className="btn bg-danger text-light" value="Delete" onClick={()=> handelDelete(user.id)}/>
                  </td>
                </tr>
              );
            };
          })}
        </tbody>
      </table>
    </div>
  );
}
