import React, { useEffect, useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { employeeUpSchema } from "../schemas/employee";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import {
  Container,
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
  Grid,
} from "@mui/material";

//import url from "../action/api";

const submitUrl = "https://localhost:7105/api/Employees";
//const updateUrl = ;

function EmployeeScreen() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialvalues, setInitialvalues] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    gender: "",
    addressline1: "",
    addressline2: "",
    city: "",
    state: "",
    email: "",
    salary: "",
  });
  //console.log(initialvalues);

  useEffect(() => {
    getEmployees();
  }, [id]);

  async function getEmployees() {
    if (id) {
      console.log("id", id);
      const res = await axios.get(`https://localhost:7105/api/Employees/${id}`);
      console.log("id res", res.data);
      setInitialvalues({
        firstname: res.data.firstName,
        lastname: res.data.lastName,
        dateOfBirth: res.data.dateOfBirth,
        gender: res.data.gender,
        addressline1: res.data.addressLine1,
        addressline2: res.data.addressLine2,
        city: res.data.city,
        state: res.data.state,
        email: res.data.email,
        salary: res.data.salary,
      });
    }
  }

  const formik = useFormik({
    initialValues: initialvalues,
    enableReinitialize: true,
    validationSchema: employeeUpSchema,
    onSubmit: async (value, action) => {
      console.log("Form submitted");
      value.dateOfBirth = new Date(value.dateOfBirth).toISOString();
      console.log(value);
      try {
        if (id) {
          await axios.put(`https://localhost:7105/api/Employees/${id}`, value, {
            headers: { "Content-Type": "application/json" },
          });
        } else {
          await axios.post(submitUrl, value, {
            headers: { "Content-Type": "application/json" },
          });
        }
        action.resetForm();
        navigate("/layout/employees");
        alert("Registration Successful");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const onCancelHandle = () => {
    navigate("/layout/employeeslistcopy");
  };

  function formatDate(string) {
    let dob;
    if (string) {
      console.log("string", string);
      dob = new Date(string).toISOString().slice(0, 10);
      console.log("dob", dob);
    } else {
      dob = new Date().toISOString().slice(0, 10);
    }
    return dob;
  }

  return (
    <FormikProvider value={formik}>
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 5, pt: 0, mb: 3 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", padding: 2 }}
          >
            {id ? "Update Employee" : "Add Employee"}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="First Name"
                  name="firstname"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  error={
                    formik.touched.firstname && Boolean(formik.errors.firstname)
                  }
                  helperText={
                    formik.touched.firstname && formik.errors.firstname
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Last Name"
                  name="lastname"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  error={
                    formik.touched.lastname && Boolean(formik.errors.lastname)
                  }
                  helperText={formik.touched.lastname && formik.errors.lastname}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Date Of Birth"
                  type="date"
                  name="dateOfBirth"
                  onChange={formik.handleChange}
                  value={formatDate(formik.values.dateOfBirth)}
                  InputLabelProps={{ shrink: true }}
                  error={
                    formik.touched.dateOfBirth &&
                    Boolean(formik.errors.dateOfBirth)
                  }
                  helperText={
                    formik.touched.dateOfBirth && formik.errors.dateOfBirth
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Gender
                </Typography>
                <RadioGroup
                  name="gender"
                  onChange={formik.handleChange}
                  value={formik.values.gender}
                  row
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                    defaultChecked
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
                {formik.touched.gender && formik.errors.gender && (
                  <Typography color="error" variant="body2">
                    {formik.errors.gender}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Address Line 1"
                  name="addressline1"
                  onChange={formik.handleChange}
                  value={formik.values.addressline1}
                  error={
                    formik.touched.addressline1 &&
                    Boolean(formik.errors.addressline1)
                  }
                  helperText={
                    formik.touched.addressline1 && formik.errors.addressline1
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Address Line 2"
                  name="addressline2"
                  onChange={formik.handleChange}
                  value={formik.values.addressline2}
                  error={
                    formik.touched.addressline2 &&
                    Boolean(formik.errors.addressline2)
                  }
                  helperText={
                    formik.touched.addressline2 && formik.errors.addressline2
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="State"
                  name="state"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="City"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Salary"
                  name="salary"
                  onChange={formik.handleChange}
                  value={formik.values.salary}
                  error={formik.touched.salary && Boolean(formik.errors.salary)}
                  helperText={formik.touched.salary && formik.errors.salary}
                />
              </Grid>
              <Grid
                item
                xs={12}
                container
                justifyContent="flex-end"
                spacing={2}
              >
                <Grid item>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={onCancelHandle}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" type="submit">
                    {id ? "Update" : "Save"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </FormikProvider>
  );
}
export default EmployeeScreen;
