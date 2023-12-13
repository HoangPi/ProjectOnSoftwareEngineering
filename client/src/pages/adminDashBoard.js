import React, { useEffect, useState } from "react";
import { GetUserSession, SignOut } from "../api/generalAPI.js";
import { useNavigate } from "react-router-dom";
import { GetAccounts } from "../api/adminAPI.js";
import { GetTutors, GetStudents } from "../api/generalAPI";

export const AdminPage = () => {
  const navigate = useNavigate();
  const [accountsData, setAccountsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    GetUserSession().then((response) => {
      if (response.role !== "admin") {
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    Promise.all([GetAccounts(), GetStudents(), GetTutors()])
      .then(([accountsResponse, studentsResponse, tutorsResponse]) => {
        const accounts = accountsResponse.accounts;
        const students = studentsResponse.students;
        const tutors = tutorsResponse.tutors;

        console.log("Fetched accounts:", accounts);
        console.log("Fetched students:", students);
        console.log("Fetched tutors:", tutors);

        const mergedAccounts = accounts.filter((account) => account.role !== '3').map((account) => {
          const foundAccount = FindAccountById(tutors, students, account._id);
          if (foundAccount) {
            return {
              ...account,
              name: foundAccount.name,
              role: foundAccount.role,
            };
          } else {
            return account;
          }
        });

        setAccountsData(mergedAccounts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching accounts data:", error);
      });
  }, []);

  const FindAccountById = (tutorslist, studentslist, userid) => {
    try {
      const tutor = tutorslist.find(
        (tutor) => tutor.accountid.toString() === userid
      );
      const student = studentslist.find(
        (student) => student.accountid.toString() === userid
      );
      if (tutor) {
        tutor.role = "tutor";
        return tutor;
      }
      if (student) {
        student.role = "student";
        return student;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSignOut = () => {
    SignOut();
    navigate("/");
  };

  return (
    <div className="Homepage" style={{ marginLeft: "50px", marginTop: "100px", marginRight: "50px" }}>
      <h1>List of Accounts</h1>
      {isLoading ? (
        <div
          className="d-flex align-items-center"
          style={{ marginTop: "100px", marginLeft: "50px", marginRight: "100px" }}
        >
          <strong role="status">Loading...</strong>
          <div className="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
      ) : (
        <div className="list-group" style={{ marginBottom: "100px", marginTop: "100px" }}>
          {Array.isArray(accountsData) && accountsData.length > 0 ? (
            accountsData.map((value, key) => (
              <div className="account" key={key}>
                <div
                  className="list-item-container"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <a className="list-group-item list-group-item-action" key={key}>
                    {value.name} - {value.role}
                  </a>
                  {/* <button type="button" className="btn btn-danger">Delete</button> */}
                </div>
              </div>
            ))
          ) : (
            <p>No accounts available</p>
          )}
        </div>
      )}

      <button
        type="button"
        className="btn btn-primary"
        style={{ position: "fixed", bottom: "50px", left: "50%", transform: "translateX(-50%)" }}
        onClick={handleSignOut}
      >
        Logout
      </button>
    </div>
  );
};