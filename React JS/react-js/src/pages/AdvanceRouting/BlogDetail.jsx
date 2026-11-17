
import { Link, useParams, useNavigate } from "react-router";
import blogs from "../../data/blogs.json";

function BlogDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const blog = blogs.find(
        (item) => item.id === Number(id)
    );

    if (!blog) {
        return (
            <div className="container text-center py-5">
                <h2>Blog Not Found!</h2>
                <p>The blog you are looking for does not exist.</p>

                <Link to="/blog" className="btn btn-primary">
                    Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-4">

            <button
                className="btn btn-outline-secondary mb-4"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <div className="row justify-content-center">
                <div className="col-lg-9">

                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="img-fluid rounded mb-4 w-100"
                        style={{
                            maxHeight: "400px",
                            objectFit: "cover"
                        }}
                    />

                    <span className="badge bg-primary mb-3">
                        {blog.category}
                    </span>

                    <h1 className="mb-3">
                        {blog.title}
                    </h1>

                    <p className="text-muted">
                        By {blog.author} | {blog.date}
                    </p>

                    <hr />

                    <p className="lead">
                        {blog.excerpt}
                    </p>

                    <p style={{ lineHeight: "1.8" }}>
                        {blog.content}
                    </p>

                    <Link to="/blog" className="btn btn-primary mt-3">
                        All Blogs
                    </Link>

                </div>
            </div>

        </div>
    );
}

export default BlogDetail;
