
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white max-w-md w-full">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <div className="section-divider"></div>
        <p className="text-xl text-slate-600 mb-6">The page you're looking for doesn't exist</p>
        <a href="/" className="btn-primary">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
