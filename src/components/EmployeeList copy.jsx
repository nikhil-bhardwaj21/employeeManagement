import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material";

const url = "https://localhost:7105/api/Employees";

const EmployeeList = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getEmployees() {
      try {
        const res = await axios.get(url);
        setEmployeeList(res.data);
      } catch (error) {
        console.log("error ", error);
      }
    }
    getEmployees();
  }, []);

  const handleDelete = async (Id) => {
    try {
      await axios.delete(`${url}/${Id}`);
      setEmployeeList(employeeList.filter((employee) => employee.id !== Id));
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/layout/employees/${id}`);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
  const tableWidth = isSmallScreen ? 200 : 130;
  const rows = employeeList.map((employee) => ({
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
    gender: employee.gender,
  }));

  const columns = [
    {
      field: "firstName",
      headerName: "First Name",
      width: 180,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      // cellClassName: "super-app-theme--cell",
      align: "center",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 200,
      headerClassName: "super-app-theme--header",

      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: "super-app-theme--header",

      headerAlign: "center",
      align: "center",
    },
    {
      field: "gender",
      headerName: "Gender",
      width: tableWidth,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "action",
      headerName: "Action",
      width: tableWidth,
      headerClassName: "super-app-theme--header",
      align: "center",
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton color="primary" onClick={() => handleEdit(params.id)}>
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" onClick={() => handleDelete(params.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ p: 5, pt: 0, mb: 0 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Employee List
        </Typography>
        <Box sx={{ overflowX: "auto", height: 450 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            textAlignLast="center"
            sx={{
              "& .super-app-theme--header": {
                fontWeight: "bold",
                fontSize: "1.2rem",
              },
              "& .super-app-theme--cell": {
                fontWeight: "bold",
                fontSize: "1rem",
              },
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default EmployeeList;
