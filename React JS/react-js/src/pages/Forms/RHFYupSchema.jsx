import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const defaultValues = {
  firstName: "Sonali",
  lastName: "Shahi",
  age: 21,
  password: "Sonali@123",
  phone: "9876543210",
  email: "sonali@example.com",
  country: "India",
  state: "Haryana",
  cities: ["Rohtak", "Gurugram"],
  address: "Rohtak, Haryana",
  zip: "124001",
  joiningDate: "2026-10-01",
  gender: "Female",
  hobbies: ["Singing", "Dancing"],
  terms: false,
};

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

// Yup Validation Schema
const today = new Date();
today.setHours(0, 0, 0, 0);

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),

  age: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "Age must be at least 18")
    .max(40, "Age must not exceed 40"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .max(10, "Maximum 10 characters")
    .matches(/^\S+$/, "Spaces are not allowed"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number"),

  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Enter a valid email address"
    ),

  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),

  cities: Yup.array()
    .of(Yup.string())
    .min(2, "Select at least two cities")
    .required("Cities are required"),

  address: Yup.string().required("Address is required"),

  zip: Yup.string()
    .required("ZIP code is required")
    .matches(/^[0-9]{6}$/, "ZIP code must contain 6 digits"),

  joiningDate: Yup.string()
    .required("Joining date is required")
    .test("valid-date", "Invalid date", (value) => {
      if (!value) return false;
      const date = new Date(`${value}T00:00:00`);
      return !isNaN(date.getTime());
    })
    .test("before-today", "Date must be before today", (value) => {
      if (!value) return false;
      const date = new Date(`${value}T00:00:00`);
      return !isNaN(date.getTime()) && date < today;
    }),

  gender: Yup.string().required("Select gender"),

  hobbies: Yup.array()
    .of(Yup.string())
    .min(2, "Select at least two hobbies")
    .required("Select hobbies"),

  profilePicture: Yup.mixed()
    .required("Profile picture is required")
    .test("file-type", "Only JPG, PNG or GIF allowed", (value) => {
      const file = value?.[0];
      if (!file) return false;

      return ["image/jpeg", "image/png", "image/gif"].includes(file.type);
    })
    .test("file-size", "Maximum size is 6 MB", (value) => {
      const file = value?.[0];
      return file && file.size <= 6 * 1024 * 1024;
    }),

  resume: Yup.mixed()
    .required("Resume is required")
    .test("file-type", "Only PDF or Word files allowed", (value) => {
      const file = value?.[0];
      if (!file) return false;

      return [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type);
    })
    .test("file-size", "Maximum size is 8 MB", (value) => {
      const file = value?.[0];
      return file && file.size <= 8 * 1024 * 1024;
    }),

  terms: Yup.boolean()
    .oneOf([true], "Please accept terms and conditions")
    .required("Please accept terms and conditions"),
});

function RHFYupSchema() {
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [formKey, setFormKey] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
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
      <h3>Registration Form (RHF + Yup)</h3>
      <hr />

      <Form key={formKey} id="myForm" onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset disabled={loading} className="border-0 p-0">
          <Row>
            <Col md={6} className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                {...register("firstName")}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName?.message}
              </Form.Control.Feedback>

            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                {...register("lastName")}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                {...register("age")}
                isInvalid={!!errors.age}
              />
              <Form.Control.Feedback type="invalid">
                {errors.age?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password")}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                {...register("phone")}
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                {...register("email")}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select
                {...register("country")}
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
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Select
                {...register("state")}
                isInvalid={!!errors.state}
              >
                <option value="">Select state</option>
                <option value="Haryana">Haryana</option>
                <option value="Punjab">Punjab</option>
                <option value="Delhi">Delhi</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.state?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Preferred Cities (select at least 2)</Form.Label>
              <Form.Select
                multiple
                {...register("cities")}
                isInvalid={!!errors.cities}
              >
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Delhi">Delhi</option>
                <option value="Sonipat">Sonipat</option>
                <option value="Rohtak">Rohtak</option>
                <option value="Gurugram">Gurugram</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.cities?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Complete Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                {...register("address")}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>ZIP / Pin Code</Form.Label>
              <Form.Control
                {...register("zip")}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid">
                {errors.zip?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control
                type="date"
                {...register("joiningDate")}
                isInvalid={!!errors.joiningDate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.joiningDate?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Gender</Form.Label>

              {["Male", "Female", "Transgender"].map((item) => (
                <Form.Check
                  inline
                  key={item}
                  type="radio"
                  label={item}
                  value={item}
                  {...register("gender")}
                  isInvalid={!!errors.gender}
                />
              ))}

              {errors.gender && (
                <div className="text-danger small">
                  {errors.gender.message}
                </div>
              )}
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Hobbies (select at least 2)</Form.Label>

              {["Drawing", "Singing", "Dancing"].map((item) => (
                <Form.Check
                  inline
                  key={item}
                  type="checkbox"
                  label={item}
                  value={item}
                  {...register("hobbies")}
                  isInvalid={!!errors.hobbies}
                />
              ))}

              {errors.hobbies && (
                <div className="text-danger small">
                  {errors.hobbies.message}
                </div>
              )}
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Profile Picture (JPG, PNG, GIF; max 6 MB)</Form.Label>
              <Form.Control
                type="file"
                accept=".jpg,.jpeg,.png,.gif"
                {...register("profilePicture")}
                isInvalid={!!errors.profilePicture}
              />
              <Form.Control.Feedback type="invalid">
                {errors.profilePicture?.message}
              </Form.Control.Feedback>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Label>Resume (PDF or Word; max 8 MB)</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf,.doc,.docx"
                {...register("resume")}
                isInvalid={!!errors.resume}
              />
              <Form.Control.Feedback type="invalid">
                {errors.resume?.message}
              </Form.Control.Feedback>
            </Col>
          </Row>
        </fieldset>

        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          {...register("terms")}
          isInvalid={!!errors.terms}
        />

        {errors.terms && (
          <div className="text-danger small">
            {errors.terms.message}
          </div>
        )}

        <div className="mt-3">
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit form"}
          </Button>
        </div>
      </Form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default RHFYupSchema;
