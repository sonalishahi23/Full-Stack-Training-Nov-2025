import { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, InputGroup } from "react-bootstrap";

function FormikValidation() {
    const fileInputRef = useRef(null);
    const formik = useFormik({
        initialValues: {
            firstName: "Sonali",
            lastName: "Shahi",
            username: "sonali",
            city: "Rohtak",
            state: "Haryana",
            zip: "124001",
            file: null,
            terms: false,
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            username: Yup.string().required("Required"),
            city: Yup.string().required("Required"),
            state: Yup.string().required("Required"),
            zip: Yup.string()
                .matches(/^[0-9]{6}$/, "Enter a valid 6-digit PIN code")
                .required("Required"),
            file: Yup.mixed().required("Required"),
            terms: Yup.boolean().oneOf([true], "Required"),
        }),

        onSubmit: (values, { resetForm }) => {
            console.log("Form Data:", values);
            console.log("Form is submitted");

            resetForm({
                values: {
                    firstName: "",
                    lastName: "",
                    username: "",
                    city: "",
                    state: "",
                    zip: "",
                    file: null,
                    terms: false,
                },
            });

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        },
    });

    return (
        <div className="container mt-4">
            <h4 className="mb-4">Formik Form Validation</h4>

            <Form noValidate onSubmit={formik.handleSubmit}>
                {/* First Name, Last Name and Username */}
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.firstName &&
                                !!formik.errors.firstName
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.firstName}
                        </Form.Control.Feedback>
                    </div>

                    <div className="col-md-4 mb-3">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.lastName &&
                                !!formik.errors.lastName
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.lastName}
                        </Form.Control.Feedback>
                    </div>

                    <div className="col-md-4 mb-3">
                        <Form.Label>Username</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={
                                    formik.touched.username &&
                                    !!formik.errors.username
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.username}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </div>
                </div>

                {/* City, State and ZIP */}
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.city && !!formik.errors.city
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.city}
                        </Form.Control.Feedback>
                    </div>

                    <div className="col-md-3 mb-3">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            name="state"
                            placeholder="State"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.state && !!formik.errors.state
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.state}
                        </Form.Control.Feedback>
                    </div>

                    <div className="col-md-3 mb-3">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            name="zip"
                            placeholder="ZIP"
                            value={formik.values.zip}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.zip && !!formik.errors.zip
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.zip}
                        </Form.Control.Feedback>
                    </div>
                </div>

                {/* File Upload */}
                <Form.Group className="mb-3">
                    <Form.Label>File</Form.Label>
                    <Form.Control
                        type="file"
                        name="file"
                        ref={fileInputRef}
                        onChange={(event) => {
                            formik.setFieldValue(
                                "file",
                                event.currentTarget.files[0] || null
                            );
                        }}
                        onBlur={() => formik.setFieldTouched("file", true)}
                        isInvalid={
                            formik.submitCount > 0 &&
                            !formik.values.file
                        }
                    />

                    <Form.Control.Feedback type="invalid">
                        {formik.errors.file}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Terms and Conditions */}
                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        name="terms"
                        label="Agree to terms and conditions"
                        checked={formik.values.terms}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={
                            formik.touched.terms && !!formik.errors.terms
                        }
                        feedback={formik.errors.terms}
                        feedbackType="invalid"
                    />
                </Form.Group>

                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    );
}

export default FormikValidation;
