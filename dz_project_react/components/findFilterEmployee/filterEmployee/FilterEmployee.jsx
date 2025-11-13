import style from "./filterEmployee.module.scss";

export const FilterEmployee = ({ isActive, filters, handleFilterClick }) => {
  return (
    <div>
      {filters.map((filter) => (
        <button
          key={filter.id}
          id={filter.id}
          className={style.button}
          style={{
            backgroundColor: isActive === filter.id ? "white" : "transparent",
            color: isActive === filter.id ? "black" : "white",
          }}
          onClick={() => {
            handleFilterClick(filter.id);
          }}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};
