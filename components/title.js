import Link from "next/link";
import { siteMeta } from "../blog.config";

const Title = () => (
  <p>
    <Link href="/">
      <a rel="me">{siteMeta.title}</a>
    </Link>
    <style jsx>{`
      a {
        text-decoration: none;
        // border-bottom: none;
        color: #eee;
      }

      p {
        margin-top: auto;
        margin-bottom: auto;
        font-size: 3em;
        font-weight: bold;
        font-family: "Permanent Marker", "Roboto", sans-serif;
        text-align: center;
      }
    `}</style>
  </p>
);

export default Title;
