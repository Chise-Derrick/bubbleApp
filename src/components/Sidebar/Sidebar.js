import * as React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import topImage from "../../assets/green_bg.png";

const Sidebar = (props) => {
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
        <Avatar className="sidebar__avatar" />
        <h2>Chise Derrick</h2>
        <h4>chise.derrick@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,454</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,222</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("engineering")}
        {recentItem("design")}
      </div>
    </div>
  );
};

export default Sidebar;
