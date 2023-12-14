import { Link } from "react-router-dom";
import "./styleCSS/Home.css";
export default function Home() {
  return (
    <div className="Home">
      <h1 className="Hometitle">
        <b>Find the Perfect Flights prices for your trip.</b>
      </h1>
      <p className="welcome">
        Welcome to QuickBooking – Your Swift Ticket to the Skies! At
        QuickBooking, we understand that your time is valuable, and we're here
        to streamline your flight booking experience like never before.
      </p>
      <Link to="Booking">
        <button>Book Now</button>
      </Link>
    </div>
  );
}
