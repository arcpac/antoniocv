function CategoryFilter(props) {


  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="dropdown p-5">
      <select
        className="filter-btn btn btn-outline-secondary"
        value={props.selected}
        onChange={filterChangeHandler}
      >
        <option value="all">All</option>
        <option value="Cybersecurity">Cybersecurity</option>
        <option value="Programming">Programming</option>
        <option value="Hacking">Hacking</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
