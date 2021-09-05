import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

//taking props as a parameter bcz app.js has header title=hello, just title is destructuring it and robust
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className="header">
      {/* style={{ color: 'red', backgroundColor: 'black' }} */}
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//if you do not want it inline, then poof
//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header;
