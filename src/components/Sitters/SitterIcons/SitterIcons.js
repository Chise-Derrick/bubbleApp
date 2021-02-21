import * as React from "react";
import "./SitterIcons.css";
import { Avatar, Button } from "@material-ui/core";
import InputSitterOption from "../InputSitterOption";
import dbsGrey from "../../../assets/dbs_grey.png";
import dbsBlue from "../../../assets/dbs.png";
import senGrey from "../../../assets/sen_grey.png";
import senBlue from "../../../assets/sen.png";
import connectedGrey from "../../../assets/connected_grey.png";
import connectedBlue from "../../../assets/connected.png";

const SitterIcons = ({
  name,
  description,
  message,
  photoUrl,
  verifiedDBS,
  SEN,
  connected,
  hourlyRate,
}) => {
  return (
    <div className="sitter__icons">
      <div className="sitter__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="sitter__info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>£{hourlyRate} per hour</p>
        </div>
      </div>
      <div className="sitter__body">
        <p>{message}</p>
      </div>
      <div className="sitter__buttons">
        <InputSitterOption
          imageOff={dbsGrey}
          imageOn={dbsBlue}
          title="DBS Checked"
          color="grey"
          status={verifiedDBS}
        />
        <InputSitterOption
          imageOff={senGrey}
          imageOn={senBlue}
          title="Special Needs Exp"
          color="grey"
          status={SEN}
        />
        <InputSitterOption
          imageOff={connectedGrey}
          imageOn={connectedBlue}
          title="User Connected"
          color="grey"
          status={connected}
        />
      </div>
      <div className="sitter__bookButtons">
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          className="sitter__bookButton"
        >
          Book {name}
        </Button>
      </div>
    </div>
  );
};

export default SitterIcons;
