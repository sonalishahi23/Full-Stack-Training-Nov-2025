import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function RBButtonGroups() {
    const [alignment, setAlignment] = useState("left");

    return (
        <div className="component-page">

            <h1 className="component-title">
                Button Group
            </h1>

            <div className="mt-5">

                <ButtonGroup>

                    <Button
                        variant="primary"
                        onClick={() => setAlignment("left")}
                    >
                        <i className="bi bi-text-left me-2"></i>
                        Left
                    </Button>

                    <Button
                        variant="primary"
                        onClick={() => setAlignment("center")}
                    >
                        <i className="bi bi-text-center me-2"></i>
                        Center
                    </Button>

                    <Button
                        variant="primary"
                        onClick={() => setAlignment("right")}
                    >
                        <i className="bi bi-text-right me-2"></i>
                        Right
                    </Button>

                </ButtonGroup>

                <div
                    className="button-group-output mt-4 p-3 border"
                    style={{ textAlign: alignment }}
                >
                    Here, the actions of the above buttons will be reflected.
                </div>

            </div>

        </div>
    );
}

export default RBButtonGroups;