import * as React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post/Post";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import axiosFunctions from "../../functions/axiosFunctions";

const Feed = (props) => {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    axiosFunctions.getLocalSitter(user.data.token).then((sitter) => {});
    axiosFunctions.getActiveBookings(user.data.token).then((sitter) => {
      console.log(sitter.data.confirmedBookings);
      setBookings(sitter.data.confirmedBookings);
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__bookingsTitle">
        <h3>Current Bookings</h3>
      </div>
      {bookings.map(
        ({
          id,
          otherUserFullName,
          bookingProcess,
          bookingStatus,
          scheduledDuration,
          scheduledStart,
          imageUrl,
          parentId,
        }) => (
          <Post
            key={id}
            pId={id}
            otherUserFullName={otherUserFullName}
            imageUrl={imageUrl}
            bookingProcess={bookingProcess}
            bookingStatus={bookingStatus}
            scheduledDuration={scheduledDuration}
            scheduledStart={scheduledStart}
            parentId={parentId}
          />
        )
      )}
    </div>
  );
};

export default Feed;
