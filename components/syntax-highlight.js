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
          background: linear-gradient(to right, #dcccff, #dcbbff);
          color: #333;
          padding: 0.1em 0.2em;
          border-radius: 0.2em;
          margin: 0em 0.1em;
          font-size: 1em;
          box-shadow: 1px 1px 4px -3px rgba(0, 0, 0, 0.75);
        }
      `}
    </style>
  </div>
);
