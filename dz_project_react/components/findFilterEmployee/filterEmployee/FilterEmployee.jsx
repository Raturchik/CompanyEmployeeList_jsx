import style from "./filterEmployee.module.scss";
export const FilterEmployee = () => {
  return (
    <div>
      <button className={style.button}>Все сотрудники</button>
      <button className={style.button}>На повышение</button>
      <button className={style.button}>З/П больше 1000$</button>
    </div>
  );
};
