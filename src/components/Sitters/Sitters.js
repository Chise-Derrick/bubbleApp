import * as React from "react";
import "./Sitters.css";

import SitterIcons from "./SitterIcons/SitterIcons";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import axiosFunctions from "../../functions/axiosFunctions";

const Sitters = (props) => {
  const user = useSelector(selectUser);
  const [sitters, setSitters] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        setSitters(doc.data().localSitters);
      });
    /*    axiosFunctions.getLocalSitter(user.data.token).then((sitter) => {
      setSitters(sitter.data);
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
    <div className="sitter">
      <div className="sitter__inputContainer">
        <div className="sitter__inputOptions">
          <h3>Sitters near you...</h3>
        </div>
      </div>
      {sitters.map(
        ({
          id,
          fullName,
          distanceInKm,
          biography,
          profileImageUrl,
          verifiedDBS,
          specialNeedsExperience,
          idVerified,
          hourlyRate,
        }) => (
          <SitterIcons
            key={id}
            name={fullName}
            description={distanceInKm + "km away."}
            message={biography}
            photoUrl={profileImageUrl}
            verifiedDBS={verifiedDBS}
            SEN={specialNeedsExperience}
            connected={idVerified}
            hourlyRate={hourlyRate}
          />
        )
      )}
    </div>
  );
};

export default Sitters;
