import { useEffect, useState } from "react";
import axios from "axios";
function API() {
  const [table, settable] = useState([]);
  useEffect(
    ()=>{
      
  //     Axios

      axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(reponse => settable(reponse.data))

  //     Fetch
      
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>{ return response.json()})
      .then((data)=>{settable(data)})

    },[]
  )
  return (
    <div className="container shadow-sm mt-5 p-5 border">
      {table.map((e) => {
        return (
          <div className="card shadow-sm">
            <h3 className="text-center text-danger">
              {e.id}-{e.name}
            </h3>
            <p className="text-center">username: {e.username}</p>
            <p className="text-center">
              address: {e.address.street}|{e.address.suite}|{e.address.city}|
              {e.address.zipcode}|{e.address.geo.lat}|{e.address.geo.lat}
            </p>
            <p className="text-center">email: {e.email}</p>
            <p className="text-center">phone: {e.phone}</p>
            <p className="text-center">website: {e.website}</p>
            <p className="text-center">
              company: {e.company.name}|{e.company.catchPhrase}|{e.company.bs}
            </p>
          </div>
        );
      })}
    </div>
  );
}
export default API;
