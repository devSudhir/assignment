import style from "./Cards.module.css";

export const Cards = (props) => {
  //console.log(props);
  return (
    <table className={`${style.cardWidth}`}>
      <tbody className={style.tableBody}>
        {props.arr.map((ele, index) => (
          <tr className="card">
            <td>{ele.name}</td>
            <td>{ele.age}</td>
            <td>
              <span>{ele.gender}</span>
            </td>
            <td>
              <span>{ele.city}</span>
            </td>
            <td>
              <button
                type="button"
                className={`btn btn-primary ${style.customButton}`}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                type="button"
                className={`btn btn-danger ${style.customButton}`}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
