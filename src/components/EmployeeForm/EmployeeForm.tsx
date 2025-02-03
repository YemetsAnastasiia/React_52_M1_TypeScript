import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import { EmployeeFormWrapper, InputWrapper, Title } from "./styles";
import Button from "components/Button/Button";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(5, "Min 5 symbols")
      .max(50, "Max 50 symbols")
      .required("Field <full name> is requaired"),

    age: Yup.number()
      .min(18, "Age must be at least 18 years old")
      .max(80, "Age must be at most 80 years old")
      .required("Field <age> is requaired"),

    jobTitle: Yup.string().max(30, "Max 30 symbols"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      jobTitle: "",
    } as EmployeeFormValues,
    validationSchema,

    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.log(values);
    },
  });

  console.table(formik);

  return (
    <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
      <Title>Employee form</Title>
      <InputWrapper>
        <Input
          name="fullName"
          label="Full Name *"
          placeholder="Enter your full name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          errorMessage={formik.errors.fullName}
        />
        <Input
          name="age"
          label="Age *"
          placeholder="Enter your age"
          value={formik.values.age}
          onChange={formik.handleChange}
          errorMessage={formik.errors.age}
        />
        <Input
          name="jobTitle"
          label="Job Title"
          placeholder="Your job title"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          errorMessage={formik.errors.jobTitle}
        />
      </InputWrapper>
      <Button name="Create" type="submit" />
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
