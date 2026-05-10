import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-number">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-gradient">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
