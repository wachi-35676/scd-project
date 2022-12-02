import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

import "./styles.css";

function Summary(props) {
  return (
    <div className="Summary">
        <div className="IconFrame">
            <div className="MainIcon">
                {props.MainIcon}
            </div>
        </div>
        <br/>
        <div className="MainHeading">
            {props.Heading}
        </div>
        <div className="SubHeading">
            {props.SubHeading}
        </div>
        <div className="ProgressStatus">
            {props.Progress}%
        </div>
        <div className="Progress">
            <ProgressBar bgcolor="#7163ba" progress={props.Progress}  height={20} />
        </div>
    </div>
  );
}

export default Summary;