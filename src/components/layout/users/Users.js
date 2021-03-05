import PropTypes from "prop-types";
import UserItem from "./UserItem";
import Spinner from "../Spinner";
const Users = ({ users, loading }) => {
  if (loading) return <Spinner />;
  else {
    return (
      <div style={userStyle}>
        {users.length === 0 ? (
          <p>No Results</p>
        ) : (
          users.map((user) => <UserItem key={user.id} user={user} />)
        )}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
