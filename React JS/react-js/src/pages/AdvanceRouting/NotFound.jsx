
import { Link, useNavigate } from "react-router";

function NotFound() {

    const navigate = useNavigate();

    return (
        <div className="container text-center py-5">

            <h1 className="display-1 fw-bold text-primary">
                404
            </h1>

            <h2 className="mb-3">
                Page Not Found!
            </h2>

            <p className="text-muted mb-4">
                Sorry, the page you are looking for does not exist
                or may have been moved.
            </p>

            <div className="d-flex justify-content-center gap-3">

                <Link to="/" className="btn btn-primary">
                    <i className="bi bi-house me-2"></i>
                    Go Home
                </Link>

                <Link to="/blog" className="btn btn-outline-primary">
                    <i className="bi bi-journal-text me-2"></i>
                    View Blogs
                </Link>

                <button
                    className="btn btn-outline-secondary"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>

            </div>

        </div>
    );
}

export default NotFound;
