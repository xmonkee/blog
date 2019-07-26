import React from "react";
import PropTypes from "prop-types";
import Head from "./head";
import Nav from "./nav";
import Title from "./title";

function Header({ path, pageTitle, ogImage }) {
  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} />

      <header>
        <Title />
        {/* <Nav /> */}
      </header>
      <style jsx>
        {`
          header {
            color: white;
            max-width: 55rem;
            margin: 0 auto 1em auto;
            padding: 1em 0;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            text-align: center;
          }
        `}
      </style>
      <style jsx global>
        {`
          html {
            margin: 0;
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            margin: 0;
            overflow-x: hide;
            font-family: "Lato", "Roboto", sans-serif;
            line-height: 1.6;
            font-weight: 300;
            font-size: 1.2rem;
            color: #555;
            background-image: linear-gradient(
                to right,
                rgba(191, 0, 255, 0.4),
                rgba(0, 5, 94, 0.4)
              ),
              url(/static/landscape.jpg);
          }

          strong {
            color: #333;
          }

          h1,
          h2,
          h3,
          h4 {
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: #333;
            line-height: 1.25;
          }

          h1 {
            font-size: 2rem;
            font-family: "Permanent Marker", "Roboto", sans-serif;
          }

          h2 {
            margin-top: 1rem;
            font-size: 1.8rem;
          }

          h3 {
            margin-top: 1.5rem;
            font-size: 1.5rem;
          }

          p {
            margin-top: 0;
            margin-bottom: 1rem;
          }

          ul,
          ol,
          dl {
            margin-top: 0;
            margin-bottom: 1rem;
          }

          a {
            color: #1d0091;
            cursor: pointer;
            text-decoration: none;
            // border-bottom: 6px solid #b000cd;
          }

          a:hover,
          a:focus {
            border-bottom: 8px solid #ffaaff;
          }

          hr {
            position: relative;
            margin: 1.5em 0;
            border: 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #fff;
          }

          blockquote {
            padding: 0.5em 1em;
            margin: 0.8em 0;
            color: #555;
            border-left: 0.25em solid #ccc;
          }

          blockquote p:last-child {
            margin-bottom: 0;
          }

          pre code {
            font-size: 18px;
          }

          code {
            color: #fff;
          }

          .wrap {
            max-width: 38rem;
            margin-left: auto;
            margin-right: auto;
          }

          article img {
            max-width: 100%;
            height: auto;
          }
        `}
      </style>
    </>
  );
}

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string
};

export default Header;
