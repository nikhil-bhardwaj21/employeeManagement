import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
//import { useTheme } from "@emotion/react";

const url = "https://localhost:7105/api/Employees";

const Dashboard = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [employeeAges, setEmployeeAges] = useState([]);

  useEffect(() => {
    async function getEmployees() {
      try {
        const res = await axios.get(url);
        //console.log(res.data);
        setEmployeeData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEmployees();
  }, []);

  useEffect(() => {
    if (employeeData.length > 0) {
      const calculateAges = employeeData.map((employee) => {
        const birthDate = new Date(employee.dateOfBirth);
        // console.log("dob", birthDate);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        return { name: employee.firstName, age };
      });
      setEmployeeAges(calculateAges);
    } else {
    }
  }, [employeeData]);

  const xLabels = employeeData.map((emp) => emp.firstName);
  const ageData = employeeAges.map((emp) => emp.age);
  const pieChartData = employeeData.map((emp, index) => ({
    id: index,
    value: emp.salary,
    label: emp.firstName,
  }));

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const chartWidth = isSmallScreen ? 300 : 500;
  const chartHeight = isSmallScreen ? 200 : 300;

  return (
    <>
      <Box padding={isSmallScreen ? 4 : 3}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12} md={6}>
            <LineChart
              width={chartWidth}
              height={chartHeight}
              series={[{ data: ageData, label: "Age" }]}
              xAxis={[
                { scaleType: "point", data: xLabels, label: "Employee Names" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PieChart
              series={[
                {
                  data: pieChartData,
                },
              ]}
              width={chartWidth}
              height={chartHeight}
            />
          </Grid>
          <Grid item xs={12}>
            <BarChart
              width={chartWidth}
              height={chartHeight}
              series={[{ data: ageData, label: "Age" }]}
              xAxis={[
                { scaleType: "band", data: xLabels, label: "Employe Names" },
              ]}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
