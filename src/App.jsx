import "./styles.css";
import { useState, useEffect } from "react";
import { Cards } from "./Components/Cards";
import { Navbar } from "./Components/Navbar";
import axios from "axios";
export default function App() {
  const [studentArray, setStudentArray] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const getData = async () => {
    const res = await axios.get(`http://localhost:8030/students`);
    //console.log("res:", res.data);
    setStudentArray(res.data.students);
    setTotalPages(res.data.totalPages);
    /* console.log("res:", studentArray.totalPages); */
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar
        totalPages={totalPages}
        setStudentArray={setStudentArray}
        setTotalPages={setTotalPages}
      />
      {studentArray.length != 0 ? (
        <Cards arr={studentArray} getData={getData} />
      ) : (
        <div className="alert alert-info" role="alert">
          No records found!
          <br />
          Please Add to see.
        </div>
      )}
    </div>
  );
}
