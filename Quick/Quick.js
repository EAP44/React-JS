import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styleCSS/Quick.css";
import QuickIMG from "./image/Quick.png";
import EN from "./image/united-states.png";
import F from "./image/F.png";
import Home from "./Home";
import Booking from "./Booking";
import Destinations from "./Destinations";
import Informations from "./Informations";
export default function Quick() {
  return (
    <BrowserRouter>
      <header>
        <div className="Icon">
          <Link to="/">
            <img src={QuickIMG} width={300} height={80} alt="Quick" />
          </Link>
        </div>
        <div className="Navigation">
          <nav>
            <ul>
              <li>
                <Link to="Booking">BOOKING</Link>
              </li>
              <li>
                <Link to="Destinations">DESTINATIONS</Link>
              </li>
              <li>
                <Link to="Informations">INFORMATIONS</Link>
              </li>
            </ul>
          </nav>
          <div className="CL">
            <h6>
              <Link to="/">Contact us</Link>
            </h6>
            <div className="lang-menu">
              <div className="select-lang">
                <img src={EN} width={25} height={25} alt="English" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Booking" element={<Booking />} />
        <Route path="Destinations" element={<Destinations />} />
        <Route path="Informations" element={<Informations />} />
        <Route path="*" element="" />
      </Routes>
      <footer>
        <img src={F} alt="footer" usemap="#image-map"/>
        <map name="image-map">
          <area
            target="_blank"
            alt="Booking.com"
            title="Booking.com"
            href="https://www.booking.com/index.en-gb.html?aid=2311236;label=en-ma-booking-desktop-wYUXKBEMYbBk0V0Er5C_GgS652796016120:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-334108349:lp9073703:li:dec:dm;ws=&amp;gad_source=1&amp;gclid=CjwKCAiAmsurBhBvEiwA6e-WPDQC4gfLycbTLmy01EFg9KbaHI8o7zyoAxVIz6UIZFYxvHa3VIERBhoC_n4QAvD_BwE"
            coords="64,28,158,43"
            shape="rect"
          />
          <area
            target="_blank"
            alt="KAYAK"
            title="KAYAK"
            href="https://www.kayak.com/flights?lang=en&amp;skipapp=true&amp;gclid=CjwKCAiAmsurBhBvEiwA6e-WPALQi1nwEX79V_BaZDWtr1pyVbKmxuOqXHL4frW-S0LBWRUurWHbbBoCTkMQAvD_BwE&amp;aid=104711689875"
            coords="196,25,288,47"
            shape="rect"
          />
          <area
            target="_blank"
            alt="OpenTable"
            title="OpenTable"
            href="https://www.opentable.com/"
            coords="327,23,430,47"
            shape="rect"
          />
          <area
            target="_blank"
            alt="priceline"
            title="priceline"
            href="https://www.priceline.com/?tab=hotels&amp;kw=priceline&amp;match=e&amp;adp=&amp;refid=PLGOOGLECPCB&amp;refclickid=d%3AcBRAND16833014270g46024356902310941049094kwd-10842441%7C9073703%7C&amp;gad_source=1&amp;gclid=CjwKCAiAmsurBhBvEiwA6e-WPO6kfNximuRernv2t8dG3Ys-AhCg2BKKMDkkruUGJOiyJZa5E65qkRoC6PMQAvD_BwE&amp;slingshot=1048"
            coords="466,23,557,45"
            shape="rect"
          />
          <area
            target="_blank"
            alt="agoda.com"
            title="agoda.com"
            href="https://www.agoda.com/fr-fr/?site_id=1891454&amp;tag=b08029bb-7379-a1cc-4a11-8acc761a0960&amp;device=c&amp;network=g&amp;adid=577247894806&amp;rand=7364114604857823349&amp;expid=&amp;adpos=&amp;aud=kwd-7027383557&amp;gclid=CjwKCAiAmsurBhBvEiwA6e-WPLJ333sjyfV43uqGlvowiRcXFXdv2KDv32XE8UD2bNi5aTNrlvvVqRoCWiQQAvD_BwE&amp;pslc=1&amp;ds=zHL5p3fWm9n6tvwM"
            coords="595,18,674,48"
            shape="rect"
          />
          <area
            target="_blank"
            alt="Rentalcars.com"
            title="Rentalcars.com"
            href="https://www.rentalcars.com/"
            coords="709,19,836,49"
            shape="rect"
          />
        </map>
      </footer>
    </BrowserRouter>
  );
}
