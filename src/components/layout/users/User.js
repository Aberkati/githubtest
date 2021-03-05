import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Repos from "../../../repos/Repos";
import Spinner from "../Spinner";

const User = ({ getUser, getUserRepos, match, user, loading, repos }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Retour
      </Link>
      <div className="card grid-2">
        <div className="all-center">
          <img src={user && user.avatar_url} style={{ width: "150px" }} />
          <h1>{user && user.name}</h1>
          <p>Location : {user && user.location}</p>
        </div>
        <div>
          {user && user.bio && (
            <>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </>
          )}
          <a href={user && user.html_url} className="btn btn-dark my-1">
            Github Profil
          </a>
          <ul>
            <li>
              {user && user.login && (
                <>
                  <strong>Username : </strong> {user.login}
                </>
              )}
            </li>
            <li>
              {user && user.company && (
                <>
                  <strong>Company : </strong> {user.company}
                </>
              )}
            </li>
            <li>
              {user && user.blog && (
                <>
                  <strong>Site : </strong> {user.blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">
          Followers : {user && user.followers}
        </div>
        <div className="badge badge-success">
          Following : {user && user.following}
        </div>
        <div className="badge badge-danger">
          Public Repos : {user && user.public_repos}
        </div>
        <div className="badge badge-dark">
          Public Gists : {user && user.public_gists}
        </div>
      </div>

      <Repos repos={repos} />
    </>
  );
};

export default User;
