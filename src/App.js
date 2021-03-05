import NavBar from "./components/layout/NavBar";
import Users from "./components/layout/users/Users";
import User from "./components/layout/users/User";
import Search from "./components/layout/users/Search";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./components/layout/Alert";
import RepoItemDetail from "./repos/RepoItemDetail";

const App = () => {
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [alertState, setAlertState] = useState(null);

  const searchUsers = async (text) => {
    setLoading(true);
    await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GCI}&client_secret=${process.env.REACT_APP_SECRET}`
    )
      .then((response) => response.json())
      .then((data) => setUsers(data.items));
    setLoading(false);
  };

  const getUser = async (username) => {
    setLoading(true);
    await fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GCI}&client_secret=${process.env.REACT_APP_SECRET}`
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
    setLoading(false);
  };

  const getUserRepos = async (username) => {
    setLoading(true);
    await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&client_id=${process.env.REACT_APP_GCI}&client_secret=${process.env.REACT_APP_SECRET}`
    )
      .then((response) => response.json())
      .then((data) => setRepos(data));

    setLoading(false);
  };

  const setAlert = (msg, type) => {
    setAlertState({
      msg,
      type,
    });

    setTimeout(() => setAlertState(null), 1000);
  };

  return (
    <Router>
      <div className="App">
        <NavBar title="Github Dashboard" />
        <div className="container">
          <Alert alert={alertState} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Search searchUsers={searchUsers} setAlert={setAlert} />
                  <Users loading={loading} users={users} />
                </>
              )}
            />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
            <Route
              exact
              path="/user/:login/:repo"
              render={(props) => (
                <RepoItemDetail
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
