import { Outlet } from 'react-router-dom';
import AdminSidebar from "../Components/Admin/AdminSideBar";
import '../global.css';

const AdminLayout = () => {
  return (
    <div>
      <AdminSidebar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
