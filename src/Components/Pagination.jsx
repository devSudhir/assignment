export const Pagination = (props) => {
  console.log(props);
  let pages = new Array(props.numberOfPages).fill(0);
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {pages.map((ele, index) => (
          <li class="page-item">
            <a class="page-link" href="/">
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
