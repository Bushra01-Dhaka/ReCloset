import useRole from "../../Hooks/useRole"
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";


const DashboardHome = () => {
  const {role, isLoading} = useRole();
  return (
    <div>
        {
          !isLoading && role === "admin" && (<AdminDashboard></AdminDashboard>)
        }
        {
          !isLoading && role === "user" && (<UserDashboard></UserDashboard>)
        }
    </div>
  )
}

export default DashboardHome