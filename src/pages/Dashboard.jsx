import { useEffect, useState } from "react";
import api from "../services/api";


const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (error) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  },[]);

    return (
        <>
            <h1>Dashboard</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>               

        </>
    );
};

export default Dashboard;