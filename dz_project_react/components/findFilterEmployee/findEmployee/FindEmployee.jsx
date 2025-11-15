import { useState } from "react";
import style from "./FindEmployee.module.scss";
export const FindEmployee = ({ searchText, handleInputChange }) => {
  return (
    <input
      className={style.findInput}
      id=""
      name=""
      type="text"
      value={searchText}
      placeholder="Найти сотрудника"
      onChange={handleInputChange}
    />
  );
};
