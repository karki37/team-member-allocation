import * as React from "react";
import "./App.css";
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import NotFound from "./NotFound";
import GroupedTeamMembers from "./GroupedTeamMembers";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-route";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },

      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },

      {
        id: 3,
        fullName: "Shyam Jones",
        designation: "Java Developer",
        gender: "male",
        teamName: "TeamA",
      },

      {
        id: 4,
        fullName: "Yates Bailey",
        designation: "Vue Developer",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "Hari Jones",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamB",
      },

      {
        id: 6,
        fullName: "Joseph Bailey",
        designation: " Django Developer",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "Salina Jones",
        designation: " MongoDb Developer",
        gender: "female",
        teamName: "TeamC",
      },

      {
        id: 8,
        fullName: "Yalley Bailey",
        designation: "Ethereum Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Bob Shyam",
        designation: "Bitcoin Developer",
        gender: "male",
        teamName: "TeamC",
      },

      {
        id: 10,
        fullName: "Jil yates",
        designation: "Graphic Developer",
        gender: "female",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Prakash Jones",
        designation: "Front end  Developer",
        gender: "male",
        teamName: "TeamD",
      },

      {
        id: 12,
        fullName: "Rakesh Bailey",
        designation: "Typescript Developer",
        gender: "female",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleTeamSelectionChange(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.TeamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : emloyee
    );
    setEmployees(transformedEmpoyee);
  }

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
