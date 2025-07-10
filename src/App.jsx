import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);

  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(JSON.parse(loggedInUser).role);
  //     }
  //   }
  // }, [authData]);

  console.log(user);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser({ role: "admin" });
      localStorage.setItem("loggedinUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser({ role: employee });
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedinUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard data={loggedInUserData} />
      )}
    </>
  );
}

export default App;
