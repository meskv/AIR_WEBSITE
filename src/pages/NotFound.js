import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found container">
      <div className="center">
        <h2>404 Error</h2>
        <p>We cannot find that page!</p>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
