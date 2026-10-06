import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function RBSpinners() {

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = () => {
        setSubmitting(true);
    };

    const handleCancel = () => {
        setSubmitting(false);
    };

    return (
        <div className="container-fluid p-4">

            <h1 className="fw-bold mb-4">
                Spinners
            </h1>

            <div className="mt-4">

                <h2 className="fs-4 fw-semibold mb-3">
                    Default UI
                </h2>

                <div className="d-flex gap-2">

                    {submitting ? (
                        <Button
                            variant="primary"
                            disabled
                        >
                            <Spinner
                                animation="border"
                                size="sm"
                                className="me-2"
                            />
                            Submitting
                        </Button>
                    ) : (
                        <Button
                            variant="primary"
                            onClick={handleSubmit}
                        >
                            Click to Submit
                        </Button>
                    )}

                    <Button
                        variant={submitting ? "danger" : "outline-danger"}
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>

                </div>

                {submitting && (
                    <p className="mt-3 text-muted">
                        Clicking the Cancel button will stop the submission
                        process.
                    </p>
                )}

            </div>

        </div>
    );
}

export default RBSpinners;