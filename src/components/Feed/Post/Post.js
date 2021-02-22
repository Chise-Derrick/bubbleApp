import * as React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOption from "../InputOption";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import axiosFunctions from "../../../functions/axiosFunctions";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import { useEffect, useState } from "react";

const Post = ({
  pId,
  otherUserFullName,
  bookingProcess,
  bookingStatus,
  scheduledDuration,
  scheduledStart,
  imageUrl,
  parentId,
}) => {
  const user = useSelector(selectUser);
  const [sitterProp, setSitterProp] = useState({});

  const WithoutTime = (dateTime) => {
    dateTime = new Date(dateTime);
    let hours = new Date(dateTime).getUTCHours();
    let minutes = new Date(dateTime).getMinutes();
    console.log(scheduledDuration);
    return hours + ":" + minutes;
  };

  return (
    <div className="post">
      <div className="post__left">
        <div className="post__calendar">
          <div className="post__dateMonth">
            {new Date(scheduledStart)
              .toLocaleString("default", {
                month: "short",
              })
              .toUpperCase()}
          </div>
          <div className="post__dateDay">
            {new Date(scheduledStart).getDate()}
          </div>
        </div>
        <div className="post__time">{WithoutTime(scheduledStart)}</div>
      </div>
      <div className="post__right">
        <div className="post__header">
          <Avatar src={imageUrl}>{otherUserFullName[0]}</Avatar>
          <div className="post__info">
            <h2>{otherUserFullName}</h2>
            <p>{parentId}</p>
          </div>
        </div>
        <div className="post__body">
          <p>
            {" "}
            {new Date(scheduledStart)
              .toLocaleString("default", {
                month: "short",
              })
              .toUpperCase()}{" "}
            {new Date(scheduledStart).getDate()}
            {" at "}
            {WithoutTime(scheduledStart)}
            {". Booked for "}
            {scheduledDuration}
            {" Hours. "}
          </p>
        </div>

        <div className="post__buttons">
          <InputOption
            Icon={SendOutlinedIcon}
            title="Send Message"
            color="grey"
          />
          <InputOption Icon={AccessTimeIcon} title="Reschedule" color="grey" />
        </div>
      </div>
    </div>
  );
};

export default Post;
