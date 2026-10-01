import { useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState("");

  const [createData, setCreateData] = useState({
    empId: "",
    empName: "",
    salary: "",
    age: "",
    city: "",
    state: ""
  });

  const [updateData, setUpdateData] = useState({
    empId: "",
    empName: "",
    salary: "",
    age: "",
    city: "",
    state: ""
  });

  // GET ALL EMPLOYEES
  const getAllEmployees = async () => {
    try {
      const response = await fetch("http://localhost:8080/getEmpList");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      alert("Unable to get employees");
      console.log(error);
    }
  };

  // GET ONE EMPLOYEE
  const getEmployee = async () => {
    if (!employeeId) {
      alert("Enter Employee ID");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/getEmp/${employeeId}`
      );

      const data = await response.json();

      if (data) {
        setEmployees([data]);
      }
    } catch (error) {
      alert("Employee not found");
      console.log(error);
    }
  };

  // CREATE EMPLOYEE
  const createEmployee = async () => {
    try {
      const response = await fetch("http://localhost:8080/createEmp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(createData)
      });

      if (response.ok) {
        alert("Employee created successfully!");

        setCreateData({
          empId: "",
          empName: "",
          salary: "",
          age: "",
          city: "",
          state: ""
        });

        getAllEmployees();
      }
    } catch (error) {
      alert("Error while creating employee");
      console.log(error);
    }
  };

  // DELETE EMPLOYEE
  const deleteEmployee = async () => {
    if (!employeeId) {
      alert("Enter Employee ID");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/deleteEmp/${employeeId}`,
        {
          method: "DELETE"
        }
      );

      if (response.ok) {
        alert("Employee deleted successfully!");
        setEmployeeId("");
        getAllEmployees();
      }
    } catch (error) {
      alert("Error while deleting employee");
      console.log(error);
    }
  };

  // UPDATE EMPLOYEE
  const updateEmployee = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/updateEmp/${updateData.empId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updateData)
        }
      );

      if (response.ok) {
        alert("Employee updated successfully!");
        getAllEmployees();
      }
    } catch (error) {
      alert("Error while updating employee");
      console.log(error);
    }
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div>
          <h1>Employee Management</h1>
          <p>Manage your employees easily</p>
        </div>

        <div className="header-icon">
          👨‍💼
        </div>
      </header>

      {/* DASHBOARD */}
      <div className="dashboard">

        {/* GET ALL */}
        <div className="card full-card">
          <div className="card-title">
            <span className="icon purple">👥</span>
            <div>
              <h2>All Employees</h2>
              <p>View all employee records</p>
            </div>
          </div>

          <button
            className="btn primary"
            onClick={getAllEmployees}
          >
            View All Employees
          </button>
        </div>


        {/* GET EMPLOYEE */}
        <div className="card">
          <div className="card-title">
            <span className="icon blue">🔍</span>
            <div>
              <h2>Get Employee</h2>
              <p>Search employee by ID</p>
            </div>
          </div>

          <div className="input-button">
            <input
              type="number"
              placeholder="Enter Employee ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />

            <button
              className="btn blue-btn"
              onClick={getEmployee}
            >
              Search
            </button>
          </div>
        </div>


        {/* DELETE */}
        <div className="card">
          <div className="card-title">
            <span className="icon red">🗑️</span>
            <div>
              <h2>Delete Employee</h2>
              <p>Remove employee by ID</p>
            </div>
          </div>

          <div className="input-button">
            <input
              type="number"
              placeholder="Enter Employee ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />

            <button
              className="btn danger"
              onClick={deleteEmployee}
            >
              Delete
            </button>
          </div>
        </div>


        {/* CREATE */}
        <div className="card full-card">
          <div className="card-title">
            <span className="icon green">➕</span>
            <div>
              <h2>Create Employee</h2>
              <p>Add a new employee</p>
            </div>
          </div>

          <div className="form-grid">
            <input
              placeholder="Employee ID"
              value={createData.empId}
              onChange={(e) =>
                setCreateData({
                  ...createData,
                  empId: e.target.value
                })
              }
            />

            <input
              placeholder="Employee Name"
              value={createData.empName}
              onChange={(e) =>
                setCreateData({
                  ...createData,
                  empName: e.target.value
                })
              }
            />

            <input
              placeholder="Salary"
              value={createData.salary}
              onChange={(e) =>
                setCreateData({
                  ...createData,
                  salary: e.target.value
                })
              }
            />

            <input
              placeholder="Age"
              value={createData.age}
              onChange={(e) =>
                setCreateData({
                  ...createData,
                  age: e.target.value
                })
              }
            />

            <input
              placeholder="City"
              value={createData.city}
              onChange={(e) =>
                setCreateData({
                  ...createData,
                  city: e.target.value
                })
              }
            />

            <input
              placeholder="State"
              value={createData.state}
              onChange={(e) =>
                setCreateData({
                  ...createData,
                  state: e.target.value
                })
              }
            />

            <button
              className="btn success"
              onClick={createEmployee}
            >
              + Create Employee
            </button>
          </div>
        </div>


        {/* UPDATE */}
        <div className="card full-card">
          <div className="card-title">
            <span className="icon orange">✏️</span>
            <div>
              <h2>Update Employee</h2>
              <p>Edit existing employee details</p>
            </div>
          </div>

          <div className="form-grid">
            <input
              placeholder="Employee ID"
              value={updateData.empId}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  empId: e.target.value
                })
              }
            />

            <input
              placeholder="Employee Name"
              value={updateData.empName}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  empName: e.target.value
                })
              }
            />

            <input
              placeholder="Salary"
              value={updateData.salary}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  salary: e.target.value
                })
              }
            />

            <input
              placeholder="Age"
              value={updateData.age}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  age: e.target.value
                })
              }
            />

            <input
              placeholder="City"
              value={updateData.city}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  city: e.target.value
                })
              }
            />

            <input
              placeholder="State"
              value={updateData.state}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  state: e.target.value
                })
              }
            />

            <button
              className="btn update-btn"
              onClick={updateEmployee}
            >
              ✏️ Update Employee
            </button>
          </div>
        </div>


        {/* EMPLOYEE TABLE */}
        {employees.length > 0 && (
          <div className="card full-card table-card">

            <div className="card-title">
              <span className="icon purple">📋</span>
              <div>
                <h2>Employee List</h2>
                <p>Employee records</p>
              </div>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>State</th>
                  </tr>
                </thead>

                <tbody>
                  {employees.map((emp, index) => (
                    <tr key={index}>
                      <td>{emp.empId}</td>
                      <td>{emp.empName}</td>
                      <td>₹ {emp.salary}</td>
                      <td>{emp.age}</td>
                      <td>{emp.city}</td>
                      <td>{emp.state}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;