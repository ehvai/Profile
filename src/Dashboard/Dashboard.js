import { Outlet, NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1 className="headlines">Erica Wallbridge</h1>
      <div className="nav-box">
        <div>
          <NavLink className="nav-left nav-text" to="/">
            About
          </NavLink>
          <NavLink className="nav-center nav-text" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-right nav-text" to="/projects">
            Projects
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
