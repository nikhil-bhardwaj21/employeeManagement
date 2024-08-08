import * as Yup from "yup";

export const employeeUpSchema = Yup.object({
  firstname: Yup.string()
    .max(20, "Atleast 2 to 20 characters")
    .min(2, "Atleast 2 characters")
    .required("Please enter name"),
  lastname: Yup.string()
    .max(20, "Atleast 2 to 20 characters")
    .min(2)
    .required("Please enter last name"),
  dateOfBirth: Yup.date().required("Please enter date"),
  gender: Yup.string().required("Please select a option"),
  addressline1: Yup.string().required("Please enter address"),
  addressline2: Yup.string().required("Please enter address"),
  city: Yup.string().required("Please enter city"),
  state: Yup.string().required("Please enter state"),
  email: Yup.string().email().required("Enter a valid email"),
  salary: Yup.string().required("Please enter salary")
});


