import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import Input from "../../Components/Input";
import Btn from "../../components/button";
import { loginRecieve } from "../../store/Auth/actions";
import styles from "./styles.module.scss";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Email isn't valid")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "min number of chars is 8")
      .required("Password is required"),
  });
  const handleSubmit = (values) => {
    dispatch(loginRecieve(values));
    router.push("/Users");
  };
  return (
    <div>
      <h2 className={styles.formTitle}>LOGIN</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleSubmit(e);
            }}
          >
            <Input
              fullWidth
              id="email"
              name="email"
              variant="outlined"
              placeholder="Email"
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={errors.email}
              className={`mb-3`}
            />
            <Input
              fullWidth
              id="password"
              name="password"
              type="password"
              variant="outlined"
              placeholder="Password"
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={errors.password}
              className="mb-3"
            />
            <div className="d-flex justify-content-center">
              <Btn content="Login" type="submit" className={styles.submitBtn} />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
