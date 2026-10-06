import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function RBProgressBars() {

    const [progress, setProgress] = useState(5);

    const increaseProgress = () => {
        setProgress((prev) => Math.min(prev + 5, 100));
    };

    const decreaseProgress = () => {
        setProgress((prev) => Math.max(prev - 5, 0));
    };

    return (
        <div className="container-fluid p-4">

            <h1 className="fw-bold mb-4">
                Progress Bars
            </h1>

            {/* Buttons */}

            <div className="d-flex gap-2 mt-4">

                <Button
                    variant="primary"
                    size="sm"
                    onClick={increaseProgress}
                    disabled={progress === 100}
                >
                    Progress + 5%
                </Button>

                <Button
                    variant="primary"
                    size="sm"
                    onClick={decreaseProgress}
                    disabled={progress === 0}
                >
                    Progress - 5%
                </Button>
            </div>


            <div className="mt-4">

                <p className="mb-1">
                    Completed {progress}%
                </p>

                <ProgressBar
                    now={progress}
                    label={`${progress}%`}
                    variant="success"
                    className="mb-2"
                />

                <ProgressBar
                    now={progress}
                    variant="danger"
                />

            </div>

            <div className="mt-4 p-4 border rounded">

                <h2 className="fs-3 fw-bold">
                    Bootstrap Dashboard
                    <br />
                    Application
                </h2>

                <span className="text-muted">
                    Web Development
                </span>

                <p className="mt-3 mb-3">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </p>

                <Badge bg="primary">
                    In Progress
                </Badge>

                <ProgressBar
                    now={progress}
                    label={`${progress}%`}
                    className="mt-2"
                />

                <div className="d-flex justify-content-between mt-3">

                    <div>
                        <span className="d-block text-muted">
                            Due Date:
                        </span>
                        <strong>1 Jan, 2022</strong>
                    </div>

                    <div>
                        <span className="d-block text-muted">
                            Budget:
                        </span>
                        <strong>$123,000</strong>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default RBProgressBars;