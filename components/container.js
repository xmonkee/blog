const Container = ({ children }) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      max-width: 55rem;
      margin: 2em auto 2em auto;
      padding: 2em 2em;
      border-radius: 1rem;
      background: white;
      box-shadow: 0px 0px 20px -3px rgba(000, 0, 200, 0.45);
      overflow-x: auto;
    `}</style>
  </>
);

export default Container;
