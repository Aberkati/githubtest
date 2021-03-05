import React from "react";
import { Link } from "react-router-dom";

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <Link to={`/user/${repo.owner.login}/${repo.name}`}>{repo.name}</Link>
      </h3>
    </div>
  );
};

export default RepoItem;
