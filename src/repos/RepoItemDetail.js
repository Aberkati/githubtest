import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RepoItemDetail = ({ repos, getUserRepos, match }) => {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    getUserRepos(match.params.login);
    let res = repos.find((repo) => repo.name === match.params.repo);
    setDetail(res);
  }, []);

  return (
    <>
      <Link to={`/user/${match.params.login}`} className="btn btn-light">
        Retour
      </Link>
      <div className="card text-center">
        <h3> Name : {detail && detail.name}</h3>
        <p> Language : {detail && detail.language}</p>
        <p> Number of Stars : {detail && detail.stargazers_count}</p>
        <p> Description : {detail && detail.description}</p>
        <p> Creation Date : {detail && detail.created_at.split("T")[0]}</p>
        <p> Last Updated : {detail && detail.updated_at.split("T")[0]}</p>
        <p>
          {" "}
          Link :{" "}
          <a href={detail && detail.clone_url} target="_blank">
            {" "}
            {detail && detail.clone_url}
          </a>
        </p>
      </div>
    </>
  );
};

export default RepoItemDetail;
