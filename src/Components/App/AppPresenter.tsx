import React from "react";
import PropTypes from "prop-types";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresnter: React.SFC<IProps> = ({ isLoggedIn }) =>
  isLoggedIn ? <span>you are in</span> : <span>you are out</span>;

AppPresnter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
export default AppPresnter;
