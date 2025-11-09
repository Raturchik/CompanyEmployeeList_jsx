import React from "react";

export const FilterEmployee = (props) => {
  console.log();
  
  return (
    <div>
      <button className={props.classNameIdle}>
        Все сотрудники
      </button>
      <button  className={props.classNameIdle}>
        На повышение
      </button>
      <button  className={props.classNameIdle}>
        З/П больше 1000$
      </button>
    </div>
  );
};
