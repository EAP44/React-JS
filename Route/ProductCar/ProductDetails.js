import { Link, useParams } from "react-router-dom";
function ProductDetails({ Product }) {
  const { id } = useParams();
  const car = Product.find((e) => e.id === parseInt(id));
  return (
    <div className="container mt-2">
      <div key={car.id} className="col mt-2">
        <div className="card shadow-sm">
          <img
            className="bd-placeholder-img card-img-top"
            height={500}
            alt={car.Name}
            src={car.img}
          />
          <div className="card-body">
            <p className="card-title text-center">{car.Name}</p>
            <p className="card-text text-center">${car.price}<i class="bi bi-cash-stack"></i></p>
            <table className="table">
        <thead>
          <tr>
            <th>Miles per Gallon{" "}<i class="bi bi-fuel-pump"></i></th>
            <th>Cylinders{" "}</th>
            <th>Displacement{" "}<i class="bi bi-c-circle"></i></th>
            <th>Horsepower{" "}<i class="bi bi-lightning"></i></th>
            <th>Weight (lbs){" "}<i class="bi bi-car-front-fill"></i></th>
            <th>Acceleration{" "}<i class="bi bi-ev-front"></i></th>
            <th>Year{" "}<i class="bi bi-calendar"></i></th>
          </tr>
        </thead>
        <tbody>
            <tr key={car.id}>
              <td>{car.Miles_per_Gallon}</td>
              <td>{car.Cylinders}</td>
              <td>{car.Displacement}</td>
              <td>{car.Horsepower}</td>
              <td>{car.Weight_in_lbs}</td>
              <td>{car.Acceleration}</td>
              <td>{car.Year}</td>
            </tr>
        </tbody>
      </table>
          </div>
        <button className="btn btn-sm btn-secondary"><Link to={"/"} className="text-light">Back</Link></button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
