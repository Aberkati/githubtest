import PropTypes from "prop-types";

const NavBar = ({ title }) => {
  return <nav className="navbar bg-primary"> {title}</nav>;
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavBar;
