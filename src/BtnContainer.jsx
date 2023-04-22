import React from "react";

const BtnContainer = ({ jobs, currentItem, setCurretItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            onClick={() => {
              setCurretItem(index);
            }}
            className={currentItem === index ? "job-btn active-btn" : "job-btn"}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
