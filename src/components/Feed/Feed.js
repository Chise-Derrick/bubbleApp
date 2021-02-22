import * as React from "react";
import "./Feed.css";
import Post from "./Post/Post";
import longPic from "../../assets/cards/longterm.jpeg";
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
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        setBookings(doc.data().activeBookings);
      });
    /*    axiosFunctions.getLocalSitter(user.data.token).then((sitter) => {});
    axiosFunctions.getActiveBookings(user.data.token).then((sitter) => {
      console.log(sitter.data.confirmedBookings);
      setBookings(sitter.data.confirmedBookings);
    });*/
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
      <div className="feed__card">
        <img src={longPic} alt="" />
      </div>
    </div>
  );
};

export default Feed;
