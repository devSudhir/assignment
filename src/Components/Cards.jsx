import style from "./Cards.module.css";
import { useState } from "react";
import axios from "axios";
export const Cards = (props) => {
  //console.log(props);
  const [StudentName, setStudentName] = useState("");
  const [StudentGender, setStudentGender] = useState("Male");
  const [StudentAge, setStudentAge] = useState(0);
  const [StudentCity, setStudentCity] = useState("");
  const [edited, setEdited] = useState(false);
  //console.log(StudentName);
  const getSingleStudentData = async (id) => {
    const res = await axios.get(`http://localhost:8030/students/${id}`);
    //console.log("data getting", res);
    setStudentName(res.data.student.name);
    setStudentAge(res.data.student.age);
    setStudentGender(res.data.student.gender);
    setStudentCity(res.data.student.city);
  };
  const handleEdit = async (id) => {
    setEdited(true);
    const res = await axios.patch(`http://localhost:8030/students/${id}`, {
      name: StudentName,
      gender: StudentGender,
      age: StudentAge,
      city: StudentCity,
    });
    setTimeout(() => {
      props.getData();
    }, 1500);
    setTimeout(() => {
      setEdited(false);
    }, 3000);
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:8030/students/${id}`);
    setStudentName(res.data.student.name);

    setTimeout(() => {
      setStudentName("");
      props.getData();
    }, 1500);
  };
  return (
    <>
      <div style={{ height: "50px" }}>
        {edited == false && StudentName != "" ? (
          <div class="alert alert-info" role="alert">
            {StudentName} Record deleted
          </div>
        ) : (
          ""
        )}

        {edited && (
          <div class="alert alert-info" role="alert">
            {StudentName} Student details editted
          </div>
        )}
      </div>

      <table className={style.cardWidth}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {props.arr.map((ele, index) => (
            <tr key={index}>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>{ele.gender}</td>
              <td>{ele.city}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalEdit"
                  onClick={() => getSingleStudentData(ele._id)}
                >
                  Edit
                </button>
                <div
                  className="modal fade"
                  id="exampleModalEdit"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                  style={{ color: "#333" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Edit Student Details
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              value={StudentName}
                              onChange={(e) => setStudentName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Age
                            </label>
                            <input
                              type="Number"
                              className="form-control"
                              id="exampleInputPassword1"
                              value={StudentAge}
                              onChange={(e) => setStudentAge(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputPassword1"
                              className="form-label"
                            >
                              Gender
                            </label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              value={StudentGender}
                              onChange={(e) => setStudentGender(e.target.value)}
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="exampleInputEmail1"
                              className="form-label"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              value={StudentCity}
                              onChange={(e) => setStudentCity(e.target.value)}
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => handleEdit(ele._id)}
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
              </td>
              <td>
                <button
                  type="button"
                  className={`btn btn-danger ${style.customButton}`}
                  onClick={() => handleDelete(ele._id)}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
