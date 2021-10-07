import axios from "axios";

export const Pagination = (props) => {
  //console.log(props);
  let pages = new Array(props.numberOfPages).fill(0);
  const handleClick = async (value) => {
    const res = await axios.get(
      `http://localhost:8030/students/?page=${value}`
    );
    console.log("male response", res.data);
    props.setStudentArray(res.data.students);
    props.setTotalPages(res.data.totalPages);
    console.log("pagination", res.data);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((ele, index) => (
          <li className="page-item" key={index}>
            <button
              className="page-link"
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
