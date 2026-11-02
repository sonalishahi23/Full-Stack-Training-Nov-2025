import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BasicFormControls() {
    const [formData, setFormData] = useState({
        firstName: "Sonali",
        lastName: "Shahi",
        phone: "0987654321",
        email: "sonalirajput160@gmail.com",
        country: "India",
        state: "Haryana",
        city: "Rohtak",
        zipCode: "124001",
        address: "rohtak",
        favoriteColor: "#000000",
        joiningDate: "2026-10-01",
        age: 21,
        gender: "Female",
        hobbies: ["Singing", "Dancing"],
        agree: false,
    });

    const [submittedData, setSubmittedData] = useState(null);

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox" && name === "hobbies") {
            setFormData((prev) => ({
                ...prev,
                hobbies: checked
                    ? [...prev.hobbies, value]
                    : prev.hobbies.filter((h) => h !== value),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === "checkbox"
                    ? checked
                    : type === "range"
                        ? Number(value)
                        : value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmittedData({
            ...formData,
            resume: file || "",
        });

        setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            country: "",
            state: "",
            city: "",
            zipCode: "",
            address: "",
            favoriteColor: "#000000",
            joiningDate: "",
            age: 1,
            gender: "",
            hobbies: [],
            agree: false,
        });

        setFile(null);
        e.target.reset();
    };

    return (
        <div className="container-fluid p-4">
            <h2 className="fw-bold mb-4">Basic Form Controls</h2>

            <h5 className="fw-semibold mb-3">
                Registration Details ( RB Basic Form Controls )
            </h5>

            <Form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Select Country</Form.Label>
                            <Form.Select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                                <option value="Canada">Canada</option>
                            </Form.Select>
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Select State</Form.Label>
                            <Form.Select
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select state</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Punjab">Punjab</option>
                                <option value="California">California</option>
                                <option value="Ontario">Ontario</option>
                                <option value="England">England</option>
                            </Form.Select>
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Select City</Form.Label>
                            <Form.Select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select city</option>
                                <option value="Rohtak">Rohtak</option>
                                <option value="New Delhi">New Delhi</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="New York">New York</option>
                                <option value="Toronto">Toronto</option>
                                <option value="London">London</option>
                            </Form.Select>
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Zip/Pin Code</Form.Label>
                            <Form.Control
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Your Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Favourite Color</Form.Label>
                            <Form.Control
                                type="color"
                                name="favoriteColor"
                                value={formData.favoriteColor}
                                onChange={handleChange}
                                title="Choose your favourite color"
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="joiningDate"
                                value={formData.joiningDate}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Age: <strong>{formData.age}</strong>
                            </Form.Label>
                            <Form.Range
                                min={1}
                                max={100}
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <div>
                                {["Male", "Female", "Transgender"].map((gender) => (
                                    <Form.Check
                                        key={gender}
                                        inline
                                        type="radio"
                                        label={gender}
                                        name="gender"
                                        value={gender}
                                        checked={formData.gender === gender}
                                        onChange={handleChange}
                                        required
                                    />
                                ))}
                            </div>
                        </Form.Group>
                    </div>

                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Hobbies</Form.Label>
                            <div>
                                {["Drawing", "Singing", "Dancing"].map((hobby) => (
                                    <Form.Check
                                        key={hobby}
                                        inline
                                        type="checkbox"
                                        label={hobby}
                                        name="hobbies"
                                        value={hobby}
                                        checked={formData.hobbies.includes(hobby)}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                        </Form.Group>
                    </div>

                    <div className="col-md-12">
                        <Form.Group controlId="resume" className="mb-3">
                            <Form.Label>Resume</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => setFile(e.target.files[0] || null)}
                            />
                        </Form.Group>
                    </div>
                </div>

                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        name="agree"
                        label="Agree to terms and conditions"
                        checked={formData.agree}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button type="submit">Submit form</Button>
            </Form>

            {submittedData && (
                <div className="mt-4">
                    <h4 className="fw-bold mb-3">Form Data</h4>
                    <pre >
                        {JSON.stringify(submittedData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}

export default BasicFormControls;
