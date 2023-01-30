import React from "react";
//import PropTypes from 'prop-types'
import _ from "lodash";
export default function Navbar(props) {
  const colour = props.mode ? "light" : "dark";
  document.body.style.backgroundColor = colour === "dark" ? null : "#003366";
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary "
      data-bs-theme={!props.mode ? null : "dark"}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TextUtils
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <div className="form-check form-switch my-2 mx-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => {
                    props.changeMode();
                    props.buttons("success", `${_.capitalize(colour)} mode has been enabled`);
                  }}
                />
                <label
                  className={`form-check-label text-${colour}`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark mode
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
//back ticks are used for including js in strings
//for checking the datatype of props
// Navbar.propTypes=
// {
//     title:PropTypes.string,
//     aboutText:PropTypes.string.isRequired
// }
//incase prop values are not passed by the parent function
//  Navbar.defaultProps = {
//     title: 'This is the title'
//   };
