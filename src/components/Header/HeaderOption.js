import * as React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{user?.data.firstName || "Guest"}</h3>
    </div>
  );
};

export default HeaderOption;
