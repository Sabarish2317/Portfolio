import React from "react";
import "./work-certification.css";
const WorkAndCertificationComponent = (props) => {
  return (
    <div className="work-certification-container">
      <div className="title">04 Works & Certifications</div>
      <div className="row">
        <div className="s-no">
          <h5>(01)</h5>
        </div>
        <div className="user-name-container">
          <div className="platform-name">
            <button className="button">Github</button>
          </div>
          <div className="user-name">
            <h2>@Sabarish2317</h2>
          </div>
        </div>
        <div className="photo"></div>
      </div>
    </div>
  );
};

export default WorkAndCertificationComponent;
