import { siteMeta } from "../blog.config";

const Profile = () => (
  <div className="h-card profile">
    <img className="u-photo" src="/static/me.jpeg" alt={siteMeta.author} />

    <div>
      <p>
        Hi, I'm{" "}
        <a className="u-url p-name" href={siteMeta.siteUrl} rel="me">
          {siteMeta.author}
        </a>
      </p>
      <p className="p-note">I'm a software engineer.</p>
    </div>
    <style jsx>{`
      .profile {
        display: flex;
        align-items: center;
        padding: 1em;
        border: 1px solid #d64937;
      }

      img {
        width: 5em;
        margin-right: 0.5em;
      }

      p:last-child {
        margin-bottom: 0;
      }
    `}</style>
  </div>
);

export default Profile;
