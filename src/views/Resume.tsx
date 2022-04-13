import React from "react";
import resumePdf from "./resume.pdf"; // Cannot find module './resume.pdf'.ts(2307)


export const Resume: React.FC = () => {
  return (
    <div>
      <div>
        <a className="resume-button" href={resumePdf} target="_blank" rel="noreferrer">
          View Resume in Browser
        </a>
      </div>

      <div>
        <a className="resume-button" href={resumePdf} download="Andy_Pratt_Dev_Resume">
          Download Resume
        </a>
      </div>
    </div>
  );
};