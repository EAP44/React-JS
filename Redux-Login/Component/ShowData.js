import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ShowData (){
    const { id } = useParams();
    const users = useSelector(data=>data.users) 
    const user = users.find(user=>user.id=== parseInt(id));
    console.log(user)
    return(
        <div className="container">
            <h1>{user.Name}</h1>
            <h1>{user.Lname}</h1>
            <h1>{user.Age}</h1>
            <h1>{user.City}</h1>
            <h1>{user.Adress}</h1>
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>
        </div>
    );
};
export default ShowData;