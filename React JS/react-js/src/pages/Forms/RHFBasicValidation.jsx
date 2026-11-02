import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";

const emptyValues = {
  firstName: "",
  lastName: "",
  age: "",
  password: "",
  phone: "",
  email: "",
  country: "",
  state: "",
  cities: [],
  address: "",
  zip: "",
  joiningDate: "",
  gender: "",
  hobbies: [],
  terms: false,
};

function RHFBasicValidation() {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm({
    defaultValues: {
      firstName: "Sonali",
      lastName: "Shahi",
      age: 21,
      password: "Sonali@123",
      phone: "0987654321",
      email: "sonalirajput160@gmail.com",
      country: "India",
      state: "Haryana",
      cities: ["Rohtak", "Gurugram"],
      address: "Rohtak",
      zip: "124001",
      joiningDate: "2026-10-01",
      gender: "Female",
      hobbies: ["Singing", "Dancing"],
    },
  });

  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [formKey, setFormKey] = useState(0);

  const handleSubmitData = (data) => {
    console.log("Submitted data:", data); 
    setLoading(true);

    setTimeout(() => {
      setSubmittedData({
        ...data,
        password: undefined,
        profilePicture: data.profilePicture?.[0]?.name,
        resume: data.resume?.[0]?.name,
      });

      reset(emptyValues);
      setFormKey((k) => k + 1);

      toast.success("Form submitted successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container py-4">
      <h4>RHF Basic Validation</h4>
      <hr />

      <Form
        key={formKey}
        id="myForm"
        onSubmit={handleSubmit(handleSubmitData)}
        noValidate
      >
        <fieldset disabled={loading} className="border-0 p-0 m-0">
          <Row>
            {/* First Name */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>
                  First Name <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  {...register("firstName", {
                    required: "Please enter first name.",
                  })}
                  isInvalid={!!errors.firstName}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.firstName?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Last Name */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>
                  Last Name <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  {...register("lastName", {
                    required: "Please enter last name.",
                  })}
                  isInvalid={!!errors.lastName}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.lastName?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Age */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="age">
                <Form.Label>
                  Age <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="number"
                  placeholder="Enter age"
                  {...register("age", {
                    required: "Please enter age.",
                    valueAsNumber: true,
                    min: {
                      value: 18,
                      message: "Age must be at least 18.",
                    },
                    max: {
                      value: 40,
                      message: "Age must not exceed 40.",
                    },
                  })}
                  isInvalid={!!errors.age}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.age?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Password */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>
                  Password <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Please enter password.",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters.",
                    },
                    maxLength: {
                      value: 10,
                      message: "Password cannot exceed 10 characters.",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])\S+$/,
                      message: "Password must contain uppercase, special character, digit and no spaces."
                    }
                  })}
                  isInvalid={!!errors.password}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Phone Number */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>
                  Phone Number <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="tel"
                  placeholder="Enter 10-digit phone number"
                  {...register("phone", {
                    required: "Please enter phone number.",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number.",
                    },
                  })}
                  isInvalid={!!errors.phone}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.phone?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Email */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>
                  Email Address <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  {...register("email", {
                    required: "Please enter email address.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address.",
                    },
                  })}
                  isInvalid={!!errors.email}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Country */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="country">
                <Form.Label>
                  Select Country <span className="text-danger">*</span>
                </Form.Label>

                <Form.Select
                  {...register("country", {
                    required: "Please select country.",
                  })}
                  isInvalid={!!errors.country}
                >
                  <option value="">Select country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.country?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* State */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="state">
                <Form.Label>
                  Select State <span className="text-danger">*</span>
                </Form.Label>

                <Form.Select
                  {...register("state", {
                    required: "Please select state.",
                  })}
                  isInvalid={!!errors.state}
                >
                  <option value="">Select state</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.state?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Preferred Cities */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="cities">
                <Form.Label>
                  Select Preferred Cities{" "}
                  <span className="text-danger">*</span>
                </Form.Label>

                <Form.Select
                  multiple
                  {...register("cities", {
                    validate: (value) =>
                      value.length >= 2 || "Select at least two cities.",
                  })}
                  isInvalid={!!errors.cities}
                >
                  <option value="Sonipat">Sonipat</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Gurugram">Gurugram</option>
                  <option value="Hisar">Hisar</option>
                  <option value="Rohtak">Rohtak</option>
                </Form.Select>

                <Form.Text>
                  Hold Ctrl to select multiple cities.
                </Form.Text>

                {errors.cities && (
                  <div className="text-danger small">
                    {errors.cities.message}
                  </div>
                )}
              </Form.Group>
            </Col>

            {/* Complete Address */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>
                  Your Complete Address{" "}
                  <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter complete address"
                  {...register("address", {
                    required: "Please enter address.",
                  })}
                  isInvalid={!!errors.address}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.address?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* PIN Code */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="zip">
                <Form.Label>
                  Zip/Pin Code <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter 6-digit PIN code"
                  {...register("zip", {
                    required: "Please enter PIN code.",
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: "Enter a valid 6-digit PIN code.",
                    },
                  })}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.zip?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Joining Date */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="joiningDate">
                <Form.Label>
                  Joining Date <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="date"
                  max={new Date().toLocaleDateString("en-CA")}
                  {...register("joiningDate", {
                    required: "Please select joining date.",
                    validate: (value) => {
                      const currentDate = new Date();
                      const selectedDate = new Date(value);

                      return (
                        selectedDate < new Date(currentDate.toDateString()) ||
                        "Joining date must be before today."
                      );
                    },
                  })}
                  isInvalid={!!errors.joiningDate}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.joiningDate?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Gender */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Gender <span className="text-danger">*</span>
                </Form.Label>

                {["Male", "Female", "Transgender"].map((gender) => (
                  <Form.Check
                    inline
                    type="radio"
                    label={gender}
                    value={gender}
                    key={gender}
                    {...register("gender", {
                      required: "Please select gender.",
                    })}
                  />
                ))}

                {errors.gender && (
                  <div className="text-danger small">
                    {errors.gender.message}
                  </div>
                )}
              </Form.Group>
            </Col>

            {/* Hobbies */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Hobbies <span className="text-danger">*</span>
                </Form.Label>

                {["Drawing", "Singing", "Dancing"].map((hobby) => (
                  <Form.Check
                    inline
                    type="checkbox"
                    label={hobby}
                    value={hobby}
                    key={hobby}
                    {...register("hobbies", {
                      validate: (value) =>
                        value.length >= 2 || "Select at least two hobbies.",
                    })}
                  />
                ))}

                {errors.hobbies && (
                  <div className="text-danger small">
                    {errors.hobbies.message}
                  </div>
                )}
              </Form.Group>
            </Col>

            {/* Profile Picture */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="profilePicture">
                <Form.Label>
                  Profile Picture <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="file"
                  accept=".jpg,.jpeg,.png,.gif"
                  {...register("profilePicture", {
                    required: "Please select profile picture.",
                    validate: {
                      fileType: (files) =>
                        ["image/jpeg", "image/png", "image/gif"].includes(
                          files?.[0]?.type
                        ) || "Only JPG, PNG or GIF files are allowed.",
                      fileSize: (files) =>
                        !files?.[0] ||
                        files[0].size <= 6 * 1024 * 1024 ||
                        "Maximum file size is 6 MB.",
                    },
                  })}
                  isInvalid={!!errors.profilePicture}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.profilePicture?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Resume */}
            <Col md={6}>
              <Form.Group className="mb-3" controlId="resume">
                <Form.Label>
                  Resume <span className="text-danger">*</span>
                </Form.Label>

                <Form.Control
                  type="file"
                  accept=".pdf,.doc,.docx"
                  {...register("resume", {
                    required: "Please select resume.",
                    validate: {
                      fileType: (files) =>
                        [
                          "application/pdf",
                          "application/msword",
                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                        ].includes(files?.[0]?.type) ||
                        "Only PDF or Word documents are allowed.",
                      fileSize: (files) =>
                        !files?.[0] ||
                        files[0].size <= 8 * 1024 * 1024 ||
                        "Maximum file size is 8 MB.",
                    },
                  })}
                  isInvalid={!!errors.resume}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.resume?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </fieldset>

        {/* Terms and Conditions */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Agree to terms and conditions"
            {...register("terms", {
              required: "Please accept terms and conditions.",
            })}
            isInvalid={!!errors.terms}
          />

          {errors.terms && (
            <div className="text-danger small">
              {errors.terms.message}
            </div>
          )}
        </Form.Group>

        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit form"}
        </Button>

      </Form>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default RHFBasicValidation;
