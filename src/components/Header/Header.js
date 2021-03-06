import * as React from "react";
import "./Header.css";
import "./HeaderQuery.css";
import HeaderOption from "./HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase/firebase";

const Header = (props) => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://joinbubble.com/wp-content/uploads/2020/09/Bubble-logo.svg"
          alt=""
        />

        {/*        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>*/}
      </div>
      <div className="header__right">
        {/*        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Business" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />*/}
        <HeaderOption title="Me" onClick={logoutOfApp} avatar={true} />
      </div>
    </div>
  );
};

export default Header;
