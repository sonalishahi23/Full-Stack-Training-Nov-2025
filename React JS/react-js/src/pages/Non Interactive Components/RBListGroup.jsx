import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function RBListGroup() {

    const socialMedia = [
        {
            name: "Facebook",
            percentage: "20%",
            icon: "bi-facebook"
        },
        {
            name: "Instagram",
            percentage: "20%",
            icon: "bi-instagram"
        },
        {
            name: "YouTube",
            percentage: "20%",
            icon: "bi-youtube"
        },
        {
            name: "TwitterX",
            percentage: "20%",
            icon: "bi-twitter-x"
        },
        {
            name: "LinkedIn",
            percentage: "20%",
            icon: "bi-linkedin"
        }
    ];

    return (
        <div className="container-fluid p-4">

            <h1 className="fw-bold mb-4">
                List Group
            </h1>

            <Card className="mt-4 w-50">
                <Card.Body>

                    <Card.Title className="fs-4 fw-semibold mb-3">
                        Social Media Traffic
                    </Card.Title>

                    <ListGroup variant="flush">

                        {socialMedia.map((social, index) => (

                            <ListGroup.Item
                                key={index}
                                className="d-flex justify-content-between align-items-center"
                            >

                                <div className="d-flex align-items-center gap-2">
                                    <i className={`bi ${social.icon} text-primary`}></i>

                                    <span>{social.name}</span>
                                </div>

                                <span className="fw-semibold">
                                    {social.percentage}
                                </span>

                            </ListGroup.Item>

                        ))}

                    </ListGroup>

                </Card.Body>
            </Card>

        </div>
    );
}

export default RBListGroup;