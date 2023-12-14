import { Link } from "react-router-dom";
import Book from "./BookingComp/Book"
import "./styleCSS/Booking.css";
export default function Booking() {
  return (
    <div className="booking">
      <div className="titlepage">
        <h1>
          Where do you want to go<b>?</b>
        </h1>
      </div>
      <div className="container">
        <div className="button">
          <div className="booking-button">
            <h3 className="button-link">
              <Link to="Booking">booking</Link>
            </h3>
          </div>
          <div className="manage-button">
            <h3 className="button-link">
              <Link to="Manage">Manage</Link>
            </h3>
          </div>
          <div className="chick-in-button">
            <h3 className="button-link">
              <Link to="Chick-in">Chick-in</Link>
            </h3>
          </div>
        </div>
        <div className="space">
            <Book/>
        </div>
      </div>
    </div>
  );
}
