import * as React from "react";
import "./Sidebar.css";
import "./SidebarQuery.css";
import sidebarPic from "../../assets/cards/favourites.png";
import { Avatar } from "@material-ui/core";
import topImage from "../../assets/bubble_graphic.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Sidebar = (props) => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={topImage} alt="" />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p className="sidebar__statNumber">{user.data.biography}</p>
        </div>
        <div className="sidebar__stat">
          <p>Phone</p>
          <p className="sidebar__statNumber">{user.data.mobileNumber}</p>
        </div>
        <div className="sidebar__stat">
          <p>Address</p>
          <p className="sidebar__statNumber">
            {user.data.address.houseNo} {user.data.address.street}
          </p>
          <p className="sidebar__statNumber">{user.data.address.town}</p>
          <p className="sidebar__statNumber">{user.data.address.postcode}</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__image">
          <img src={sidebarPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
