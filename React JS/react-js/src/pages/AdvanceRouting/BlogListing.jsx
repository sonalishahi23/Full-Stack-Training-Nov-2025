
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import blogs from "../../data/blogs.json";

function BlogListing() {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
);

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchTerm.trim() === "") {
            return;
        }

        const keyword = encodeURIComponent(searchTerm.trim());

        navigate(`/blog/search/${keyword}?keyword=${keyword}`);
    };

    return (
        <div className="container py-4">

            <div className="text-center mb-4">

                <h1>Our Blog</h1>

                <p className="text-muted">
                    Explore our latest articles and tutorials.
                </p>

                <div className="row justify-content-center mt-4">
                    <div className="col-md-7">

                        <form onSubmit={handleSearch}>
                            <div className="input-group">

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search blogs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    <i className="bi bi-search me-2"></i>
                                    Search
                                </button>

                            </div>
                        </form>

                    </div>
                </div>

            </div>

            <div className="row g-4">

                {filteredBlogs.map((blog) => (

                    <div className="col-md-6 col-lg-4" key={blog.id}>

                        <div className="card h-100 shadow-sm">

                            <img
                                src={blog.image}
                                className="card-img-top"
                                alt={blog.title}
                                style={{
                                    height: "200px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body d-flex flex-column">

                                <span className="badge bg-primary align-self-start mb-2">
                                    {blog.category}
                                </span>

                                <h5 className="card-title">
                                    {blog.title}
                                </h5>

                                <p className="text-muted small">
                                    By {blog.author} | {blog.date}
                                </p>

                                <p className="card-text">
                                    {blog.excerpt}
                                </p>

                                <Link
                                    to={`/blog/${blog.id}`}
                                    className="btn btn-primary mt-auto align-self-start"
                                >
                                    Read More
                                </Link>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default BlogListing;
