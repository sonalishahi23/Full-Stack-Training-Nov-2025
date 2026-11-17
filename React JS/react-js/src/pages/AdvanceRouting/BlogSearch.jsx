
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router";
import blogs from "../../data/blogs.json";

function BlogSearch() {

    const { keyword } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [searchTerm, setSearchTerm] = useState(keyword || "");

    useEffect(() => {
        setSearchTerm(keyword || "");
    }, [keyword]);

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChange = (e) => {
        const value = e.target.value;

        setSearchTerm(value);

        if (value.trim() === "") {
            navigate("/blog/search", { replace: true });
            return;
        }

        const keyword = encodeURIComponent(value);

        navigate(
            `/blog/search/${keyword}?keyword=${keyword}`,
            { replace: true }
        );
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchTerm.trim() === "") {
            navigate("/blog/search");
            return;
        }

        const value = encodeURIComponent(searchTerm.trim());

        navigate(`/blog/search/${value}?keyword=${value}`);
    };
    return (
        <div className="container py-4">

            <h1 className="text-center mb-4">
                Search Blogs
            </h1>

            <div className="row justify-content-center mb-4">
                <div className="col-md-8">

                    <form onSubmit={handleSearch}>
                        <div className="input-group">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search blogs..."
                                value={searchTerm}
                                onChange={handleChange}
                            />

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Search
                            </button>

                        </div>
                    </form>

                </div>
            </div>

            {keyword && (
                <div className="card p-3 mb-4 bg-light">
                    <h5>Location Details</h5>

                    <pre>
                        {JSON.stringify(location, null, 4)}
                    </pre>
                </div>
            )}

            <div className="row g-4">

                {filteredBlogs.length > 0 ? (

                    filteredBlogs.map((blog) => (

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
                                        By {blog.author}
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

                    ))

                ) : (

                    <div className="text-center py-5">
                        <h4>No Blogs Found!</h4>
                        <p>Try searching with another keyword.</p>
                    </div>

                )}

            </div>

        </div>
    );
}

export default BlogSearch;
