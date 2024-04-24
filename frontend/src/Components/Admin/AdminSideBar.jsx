import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="admin-sidebar">
      <ul>
        <li className={location.pathname === "/admin/home" ? "active" : ""}>
          <Link to="/admin/home">Home</Link>
        </li>
        <li className={location.pathname === "/admin/modify-donors" ? "active" : ""}>
          <Link to="/admin/modify-donors">Donors</Link>
        </li>
        <li className={location.pathname === "/admin/modify-hospitals" ? "active" : ""}>
          <Link to="/admin/modify-hospitals">Hospitals</Link>
        </li>
        {/* <li className={location.pathname === "/admin/modify-cities" ? "active" : ""}>
          <Link to="/admin/modify-cities">Modify Cities</Link>
        </li> */}
        <li className={location.pathname === "/admin/resolve-issues" ? "active" : ""}>
          <Link to="/admin/resolve-issues">Queries</Link>
        </li>
        <li className={location.pathname === "/logout" ? "active" : ""}>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
