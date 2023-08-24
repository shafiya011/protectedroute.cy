import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, NavUl, NavList } from "../Stylings/NavStylings";
import { useAuth } from "./auth";

const Entry = () => {
  const auth = useAuth();
  return (
    <NavContainer>
      <NavUl>
        <NavList className="entryLAndingPage">
          <Link to="/landingpage">Landing Page</Link>
        </NavList>
        <NavList className="entryReviews">
          <Link to="/reviews">Protected Review</Link>
        </NavList>

        {!auth.user && (
          <NavList className="entryLogin">
            <Link to="/login">Login</Link>
          </NavList>
        )}
      </NavUl>
    </NavContainer>
  );
};

export default Entry;
