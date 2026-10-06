import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RBCards() {

    const products = [
        {
            title: "Bluetooth Headphones",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
            description:
                "Boult Newly Launched Flex On Ear Bluetooth Headphones with 80H Playtime, 40mm Bass Drivers, Zen ENC Mic, Type-C Fast Charging, Bluetooth 5.4, AUX Option, 60ms Low Latency.",
            price: "₹1,399",
            oldPrice: "₹2,999"
        },
        {
            title: "The Ear Gaming Headphone",
            image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500",
            description:
                "Newly Launched BTG Thunder Over The Ear Gaming Headphone with 70H Playtime, 40mm Titanium Drivers, Dual Pairing Headset, Gaming Mode, RGB LEDs, Detachable Mic.",
            price: "₹1,499",
            oldPrice: "₹3,999"
        },
        {
            title: "boAt Rockerz 4550",
            image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
            description:
                "boAt Rockerz 450, 15 HRS Battery, 40mm Drivers, Padded Ear Cushions, Integrated Controls, Dual Modes, On Ear Bluetooth Headphones.",
            price: "₹1,399",
            oldPrice: "₹2,999"
        }
    ];

    return (
        <div className="container-fluid p-4">

            <h1 className="fw-bold mb-4">
                Cards
            </h1>

            <Row className="g-4">

                {products.map((product, index) => (

                    <Col md={4} key={index}>

                        <Card className="h-100">

                            <Card.Header>
                                {product.title}
                            </Card.Header>

                            <Card.Img
                                variant="top"
                                src={product.image}
                                alt={product.title}
                            />

                            <Card.Body>

                                <Card.Text>
                                    {product.description}
                                </Card.Text>

                                <div className="mb-3">
                                    <strong className="fs-5">
                                        {product.price}
                                    </strong>

                                    <del className="ms-2 text-muted">
                                        {product.oldPrice}
                                    </del>
                                </div>

                            </Card.Body>

                            <Card.Footer className="d-flex gap-2">

                                <Button
                                    variant="outline-primary"
                                    size="sm"
                                >
                                    Add To Cart
                                </Button>

                                <Button
                                    variant="primary"
                                    size="sm"
                                >
                                    Buy Now
                                </Button>

                            </Card.Footer>

                        </Card>

                    </Col>

                ))}

            </Row>

        </div>
    );
}

export default RBCards;