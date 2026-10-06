import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function RBPagination() {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 10;

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="container-fluid p-4">

            <h1 className="fw-bold mb-4">
                Pagination
            </h1>

            <div className="mt-4">

                <Pagination>

                   
                    <Pagination.First
                        onClick={() => goToPage(1)}
                        disabled={currentPage === 1}
                    />

                    
                    <Pagination.Prev
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    />

                    {Array.from(
                        { length: totalPages },
                        (_, index) => index + 1
                    ).map((page) => (

                        <Pagination.Item
                            key={page}
                            active={currentPage === page}
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </Pagination.Item>

                    ))}

                    
                    <Pagination.Next
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    />

                    
                    <Pagination.Last
                        onClick={() => goToPage(totalPages)}
                        disabled={currentPage === totalPages}
                    />

                </Pagination>

                <p className="mt-3">
                    Current Page: <strong>{currentPage}</strong>
                </p>

            </div>

        </div>
    );
}

export default RBPagination;