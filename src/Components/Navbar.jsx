import axios from "axios";
import { useState } from "react";
import { Pagination } from "./Pagination";

export const Navbar = (props) => {
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentGender, setNewStudentGender] = useState("Male");
  const [newStudentAge, setNewStudentAge] = useState(0);
  const [newStudentCity, setNewStudentCity] = useState("");
  //console.log(newStudentName, newStudentGender, newStudentAge, newStudentCity);
  const handleCreateFormSubmit = (e) => {
    e.preventDefault();
    /* console.log(
      newStudentName,
      newStudentGender,
      newStudentAge,
      newStudentCity
    ); */
    axios({
      method: "post",
      url: "http://localhost:8030/students",
      headers: {},
      data: {
        name: newStudentName,
        gender: newStudentGender,
        age: newStudentAge,
        city: newStudentCity,
      },
    });
  };

  const handleFilterGender = async (gender) => {
    const res = await axios.get(
      `http://localhost:8030/students/gender/${gender}`
    );
    //console.log("male response", res.data);
    props.setStudentArray(res.data.student);
    props.setTotalPages(res.data.totalPages);
  };
  const handleFilterAge = async (value) => {
    const res = await axios.get(`http://localhost:8030/students/age/${value}`);
    //console.log("male response", res.data);
    props.setStudentArray(res.data.student);
    props.setTotalPages(res.data.totalPages);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Masai
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Create Student
              </button>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Pagination
                numberOfPages={props.totalPages}
                setStudentArray={props.setStudentArray}
                setTotalPages={props.setTotalPages}
              />
            </li>
          </ul>
          <ul style={{ listStyle: "none" }}>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button
                    className="dropdown-item"
                    href="/"
                    onClick={() => handleFilterGender("Male")}
                  >
                    Male
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleFilterGender("Female")}
                  >
                    Female
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleFilterAge(1)}
                  >
                    Age Asc.
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleFilterAge(-1)}
                  >
                    Age Dsc.
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Student
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleCreateFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    onChange={(e) => setNewStudentName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Age
                  </label>
                  <input
                    onChange={(e) => setNewStudentAge(e.target.value)}
                    type="Number"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Gender
                  </label>
                  <select
                    onChange={(e) => setNewStudentGender(e.target.value)}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    City
                  </label>
                  <input
                    onChange={(e) => setNewStudentCity(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
