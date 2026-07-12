import { Outlet } from "react-router-dom";

const DashboardLayout = () => { 
    return (
        <div>
            <h2>Navbar</h2>
            <hr/>
            <h3>Sidebar</h3>
            <hr/>
            <Outlet />
        </div>
    );
}   

export default DashboardLayout;