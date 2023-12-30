import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Userlist from "./Userlist";
import UserAdd from "./UserAdd";
import UserUpdate from "./UserUpdate";

const CrudRedux = () => {
  return (
    <BrowserRouter>
     <nav>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link class="nav-link active" to="/">
                Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-dark" to="/add-user">
                Add user
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Userlist />} />
        <Route path="/add-user" element={<UserAdd />} />
        <Route path="/update-user/:id" element={<UserUpdate />} />
      </Routes>
    </BrowserRouter>
  );
};
export default CrudRedux;