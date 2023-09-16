import { useState } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

//shift alt f to formate code
const Employees = () => {
  const [selectedTeam, setTeam] = useState("TeamB");

  const [employees, setEmployees] = useState([
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
  ]);

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
    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <div class="card-collection">
            {employees.map((employee) => (
              <div
                id={employee.id}
                className="card m-2"
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
              >
                {employee.gender === "male" ? (
                  <img src={maleProfile} className="card-img-top" />
                ) : (
                  <img src={femaleProfile} className="card-img-top" />
                )}
                <div className="card-body">
                  <h5 className="card-title">Full Name:{employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation:</b>
                    {employee.designation}
                  </p>
                  <div />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Employees;
