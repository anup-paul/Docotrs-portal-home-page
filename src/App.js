import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Login/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import SideBar from "./Components/Dashboard/Sidebar/SideBar";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute"
import AddDoctors from "./Components/AddDoctors/AddDoctors";


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (

    <div>
      <h2> Email: {loggedInUser.email}</h2>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >

        <Router>
          <Switch>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/dashboard/appointment">
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path="/addDoctors" >
                <AddDoctors></AddDoctors>
            </PrivateRoute>
            <Route path="/login" >
              <Login></Login>
            </Route>
            
          </Switch>
        </Router>

      </UserContext.Provider>
    </div>
  );
}

export default App;
