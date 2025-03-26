import { NavLink, Outlet } from "react-router-dom";
function HostLayout() {
  return (
    <nav className="host-nav">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/host"
        end
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/host/income"
      >
        Income
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/host/reviews"
      >
        Reviews
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/host/vans"
      >
        Vans
      </NavLink>
      <Outlet />
    </nav>
  );
}

export default HostLayout;
