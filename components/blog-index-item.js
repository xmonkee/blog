import Link from "next/link";
import PublishedAt from "./utils/published-at";

const Post = ({ title, summary, date, path }) => (
  <article>
    <header>
      <h1>
        <Link href={path}>
          <a>{title}</a>
        </Link>
      </h1>
      <h4 className="post-summary">{summary}</h4>
      <PublishedAt link={path} date={date} />
    </header>
    <style jsx>{`
      article {
        margin-bottom: 2em;
      }

      a {
        text-decoration: none;
      }

      .post-summary {
        margin-top: 0.5em;
      }
    `}</style>
  </article>
);

export default Post;
