import { siteMeta } from "../blog.config";

const Profile = () => (
  <div className="h-card profile">
    <img className="u-photo" src="/static/me.jpg" alt={siteMeta.author} />

    <div>
      <p>
        Hi, I'm{" "}
        <a className="u-url p-name" href="/about" rel="me">
          Mayank
        </a>
      </p>
      <p className="p-note">I'm a software engineer.</p>
    </div>
    <style jsx>{`
      .profile {
        display: flex;
        align-items: center;
      }

      img {
        width: 5em;
        height: 5em;
        margin-right: 0.5em;
        border-radius: 1000px;
        object-fit: cover;
      }

      p:last-child {
        margin-bottom: 0;
      }
    `}</style>
  </div>
);

export default Profile;
