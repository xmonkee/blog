import React from "react";
import css from "./syntax-highlight.css";

export default () => (
  <div>
    <style jsx global>
      {css}
    </style>
    <style jsx global>
      {`
        code {
          font-size: 0.8em;
          color: #555555;
          padding: 0.1em 0.2em;
          background-color: #dedede;
          border-radius: 0.2em;
          margin: 0em 0.3em;
        }
      `}
    </style>
  </div>
);
