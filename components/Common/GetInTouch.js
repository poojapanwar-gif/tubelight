"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../../styles/GetInTouch.module.scss";

const initialValues = {
  name: "",
  company: "",
  contact: "",
  jobTitle: "",
  email: "",
  message: "",
  terms: false,
  newsletter: false,
};

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Please enter your name"),
  company: Yup.string().trim(),
  contact: Yup.string()
    .trim()
    .required("Please enter your contact number")
    .matches(/^\+?[0-9\s-]{7,16}$/, "Please enter a valid contact number"),
  jobTitle: Yup.string().trim(),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  message: Yup.string().trim().required("Please enter a message"),
  terms: Yup.boolean().oneOf(
    [true],
    "Please accept the Terms of Services and Privacy Policy",
  ),
  newsletter: Yup.boolean(),
});

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Enter here", autoComplete: "name" },
  { name: "company", label: "Company", type: "text", placeholder: "Enter here", autoComplete: "organization" },
  { name: "contact", label: "Contact No.", type: "tel", placeholder: "+91", autoComplete: "tel" },
  { name: "jobTitle", label: "Job Title", type: "text", placeholder: "Enter here", autoComplete: "organization-title" },
  { name: "email", label: "Email Address", type: "email", placeholder: "Enter here", autoComplete: "email", full: true },
  { name: "message", label: "Message", as: "textarea", placeholder: "Enter here", full: true },
];

const checkboxes = [
  { name: "terms", label: "I agree to all the Terms  of Services and Privacy Policy" },
  {
    name: "newsletter",
    label: "I want to receive Tubelight communications news,trends,offers or blogs by email.",
  },
];

const GetInTouch = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    // No backend yet: acknowledge locally and clear the form.
    setSubmitted(true);
    resetForm();
    setSubmitting(false);
  };

  return (
    <section className={styles["get-in-touch-section"]}>
      <div className={styles["get-in-touch-inner"]}>
        <div className={styles["get-in-touch-heading"]}>
          <h2>Get in touch!</h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form
              className={styles["get-in-touch-form"]}
              noValidate
              onChange={() => {
                if (submitted) setSubmitted(false);
              }}
            >
              <div className={styles["form-grid"]}>
                {fields.map((field) => {
                  const hasError = touched[field.name] && errors[field.name];
                  const id = `git-${field.name}`;
                  return (
                    <div
                      key={field.name}
                      className={`${styles["form-field"]} ${
                        field.full ? styles["full-width"] : ""
                      } ${hasError ? styles["has-error"] : ""}`}
                    >
                      <div className={styles["outlined"]}>
                        <label htmlFor={id}>{field.label}</label>
                        <Field
                          id={id}
                          name={field.name}
                          type={field.as ? undefined : field.type}
                          as={field.as}
                          rows={field.as ? 6 : undefined}
                          placeholder={field.placeholder}
                          autoComplete={field.autoComplete}
                          aria-invalid={hasError ? "true" : "false"}
                        />
                      </div>
                      <ErrorMessage
                        name={field.name}
                        component="span"
                        className={styles["error-text"]}
                      />
                    </div>
                  );
                })}
              </div>

              <div className={styles["checkbox-group"]}>
                {checkboxes.map((box) => (
                  <div key={box.name} className={styles["checkbox-row"]}>
                    <label className={styles["checkbox-label"]}>
                      <Field type="checkbox" name={box.name} />
                      <span className={styles["checkbox-box"]} aria-hidden="true" />
                      <span className={styles["checkbox-text"]}>{box.label}</span>
                    </label>
                    <ErrorMessage
                      name={box.name}
                      component="span"
                      className={styles["error-text"]}
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className={styles["submit-btn"]}
                disabled={isSubmitting}
              >
                Send Message
              </button>

              {submitted && (
                <p className={styles["success-text"]} role="status">
                  Thanks! Our team will get back to you shortly.
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default GetInTouch;
