import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://joinbubble.com/wp-content/uploads/2020/09/Bubble-logo.svg"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Business" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpg"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
