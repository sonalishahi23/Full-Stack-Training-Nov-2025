import Figure from "react-bootstrap/Figure";

function RBFigure() {
    return (
        <div className="container-fluid p-4">

            <h1 className="fw-bold mb-4">
                Figures
            </h1>

            <div className="mt-4">

                <Figure>

                    <Figure.Image
                        width={400}
                        height={300}
                        alt="React Image"
                        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600"
                    />

                    <Figure.Caption>
                        A beautiful example of a React development image.
                    </Figure.Caption>

                </Figure>

            </div>

        </div>
    );
}

export default RBFigure;