export default function HeaderImage({ image }) {
  return (
    <div>
      <img src={image} />
      <style jsx>{`
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          max-width: 80%;
        }
      `}</style>
    </div>
  );
}
