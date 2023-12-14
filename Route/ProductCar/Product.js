import { Link } from "react-router-dom";
function Product({ Product }) {
  return (
    <>
      <div class="container mt-3 ">
        <div class="nav justify-content-end">
          <span className="border p-2">
            Favoris{"  "}
          <i class="bi bi-heart"></i>
          </span>
        </div>
      </div>
      <div className="container shadow-sm mt-2 p-5 border">
        <div className="row">
          {Product.map((car) => {
            return (
              <div key={car.id} className="col-3 mt-5">
                <div className="card shadow-sm">
                  <img
                    className="bd-placeholder-img card-img-top"
                    height={200}
                    alt={car.Name}
                    src={car.img}
                  />
                  <div className="card-body">
                    <p className="card-title">{car.Name}</p>
                    <p className="card-text">
                      ${car.price}
                      <i class="bi bi-cash-stack"></i>{" "}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-dark"
                        >
                          <Link
                            to={`/Product/${car.id}`}
                            className="text-light"
                          >
                            More Details
                          </Link>
                        </button>
                        <button className="btn btn-sm btn-secondary">
                        Add to Favoris{"  "}
                          <i class="bi bi-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Product;
